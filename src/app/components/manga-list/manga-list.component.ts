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
  expanded: { [key: number]: boolean } = {}; // ✅ Stocke l'état des synopsis affichés

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.mangaService.getTopMangas().subscribe((data) => {
      console.log('Top Mangas', data.data);
      this.mangas = data.data;
    });
  }

  toggleSynopsis(mangaId: number) {
    this.expanded[mangaId] = !this.expanded[mangaId];
  }

  getShortSynopsis(manga: Manga): string {
    return manga.synopsis.length > 150
      ? manga.synopsis.substring(0, 150) + '...'
      : manga.synopsis;
  }
}
