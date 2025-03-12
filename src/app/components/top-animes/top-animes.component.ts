import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class TopAnimesComponent implements OnInit, OnDestroy {
  animes: any[] = [];
  currentSlide = 0;
  autoScrollInterval: any; // ✅ Store the interval for auto-scroll

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.loadAnimes();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval); // ✅ Stop auto-scroll when component is destroyed
  }

  loadAnimes() {
    this.mangaService.getTopAnimes(1).subscribe((data) => {
      this.animes = data.data;
      this.startAutoScroll(); // ✅ Start auto-scroll once data is loaded
    });
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 10000); // ✅ Auto-scroll every 5 seconds
  }

  resetAutoScroll() {
    clearInterval(this.autoScrollInterval);
    this.startAutoScroll(); // ✅ Restart the timer after user interaction
  }

  nextSlide() {
    if (this.currentSlide < this.animes.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // ✅ Loop back to the first slide
    }
    this.resetAutoScroll();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.animes.length - 1; // ✅ Loop back to the last slide
    }
    this.resetAutoScroll();
  }
}
