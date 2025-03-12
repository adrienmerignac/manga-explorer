import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Ajout de FormsModule
import { Manga } from '../../models/manga.models';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ Ajout de FormsModule
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss'],
})
export class MangaListComponent implements OnInit {
  mangas: Manga[] = [];
  expanded: { [key: number]: boolean } = {};
  currentPage: number = 1; // ✅ Stocke la page actuelle
  selectedGenre: number | null = null; // ✅ Genre actuellement sélectionné
  genres: any[] = []; // ✅ Stocke les genres récupérés depuis l’API
  isLoading: boolean = false; // ✅ Indicateur de chargement

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.loadMangas();

    this.mangaService.getGenres().subscribe((data) => {
      // ✅ Supprime les doublons en utilisant un Set
      const uniqueGenres = new Map();

      data.data.forEach((genre: any) => {
        if (!uniqueGenres.has(genre.mal_id)) {
          uniqueGenres.set(genre.mal_id, genre);
        }
      });

      this.genres = Array.from(uniqueGenres.values()); // ✅ Convertir Map en tableau
    });
  }

  loadMangas() {
    this.isLoading = true;
    this.mangaService.getTopMangas(this.currentPage).subscribe((data) => {
      this.mangas = [...this.mangas, ...data.data].sort(
        (a, b) => b.score - a.score
      ); // ✅ Trie les résultats
      this.isLoading = false;
    });
  }

  filterByGenre() {
    if (this.selectedGenre) {
      this.mangaService
        .getMangasByGenre(this.selectedGenre)
        .subscribe((data) => {
          console.log(`Mangas du genre ${this.selectedGenre}`, data.data);

          // ✅ Ajoute le typage `as Manga[]` pour éviter l'erreur
          this.mangas = (data.data as Manga[]).sort(
            (a: Manga, b: Manga) => b.score - a.score
          );
        });
    } else {
      this.mangaService.getTopMangas().subscribe((data) => {
        this.mangas = data.data;
      });
    }
  }

  loadMore() {
    this.currentPage++; // ✅ Passe à la page suivante
    this.loadMangas(); // ✅ Charge la nouvelle page
  }
}
