import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes: any[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.loadAnimes();
  }

  loadAnimes() {
    this.isLoading = true;
    this.mangaService.getTopAnimes(this.currentPage).subscribe((data) => {
      this.animes = [...this.animes, ...data.data]; // ✅ Ajoute les nouveaux animés à la liste
      this.isLoading = false;
    });
  }

  loadMore() {
    this.currentPage++; // ✅ Passe à la page suivante
    this.loadAnimes(); // ✅ Charge la nouvelle page
  }
}
