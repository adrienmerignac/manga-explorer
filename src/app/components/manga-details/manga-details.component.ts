import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../../services/manga.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manga-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss'],
})
export class MangaDetailsComponent implements OnInit {
  manga: any;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private mangaService: MangaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mangaService.getMangaDetails(Number(id)).subscribe((data) => {
        this.manga = data.data;
        this.checkIfFavorite();
      });
    }
  }

  checkIfFavorite() {
    const storedFavoris = localStorage.getItem('favoris');
    const favoris = storedFavoris ? JSON.parse(storedFavoris) : [];
    this.isFavorite = favoris.some(
      (manga: any) => manga.mal_id === this.manga.mal_id
    );
  }

  toggleFavorite() {
    const storedFavoris = localStorage.getItem('favoris');
    let favoris = storedFavoris ? JSON.parse(storedFavoris) : [];

    if (this.isFavorite) {
      favoris = favoris.filter(
        (manga: any) => manga.mal_id !== this.manga.mal_id
      );
    } else {
      favoris.push(this.manga);
    }

    localStorage.setItem('favoris', JSON.stringify(favoris));
    this.isFavorite = !this.isFavorite;
  }
}
