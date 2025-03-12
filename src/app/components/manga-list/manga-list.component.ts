import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Manga } from '../../models/manga.models';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss'],
})
export class MangaListComponent implements OnInit {
  mangas: Manga[] = [];
  expanded: { [key: number]: boolean } = {};
  currentPage: number = 1; // ✅ Stocke la page actuelle
  isLoading: boolean = false; // ✅ Indicateur de chargement

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.loadMangas();
  }

  loadMangas() {
    this.isLoading = true;
    this.mangaService.getTopMangas(this.currentPage).subscribe((data) => {
      this.mangas = [...this.mangas, ...data.data]; // ✅ Ajoute les nouveaux mangas à la liste
      this.isLoading = false;
    });
  }

  loadMore() {
    this.currentPage++; // ✅ Passe à la page suivante
    this.loadMangas(); // ✅ Charge la nouvelle page
  }
}
