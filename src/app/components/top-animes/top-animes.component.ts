import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-top-animes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-animes.component.html',
  styleUrls: ['./top-animes.component.scss'],
})
export class TopAnimesComponent implements OnInit {
  animes: any[] = [];
  currentSlide = 0;

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.loadAnimes();
  }

  loadAnimes() {
    this.mangaService.getTopAnimes(1).subscribe((data) => {
      this.animes = data.data;
    });
  }

  nextSlide() {
    if (this.currentSlide < this.animes.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // ✅ Revient au début si on est à la fin
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.animes.length - 1; // ✅ Revient à la fin si on est au début
    }
  }
}
