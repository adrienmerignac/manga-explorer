import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss'],
})
export class FavorisComponent implements OnInit {
  favoris: any[] = [];

  ngOnInit() {
    const storedFavoris = localStorage.getItem('favoris');
    this.favoris = storedFavoris ? JSON.parse(storedFavoris) : [];
  }

  removeFromFavorites(mangaId: number) {
    this.favoris = this.favoris.filter((manga) => manga.mal_id !== mangaId);
    localStorage.setItem('favoris', JSON.stringify(this.favoris));
  }
}
