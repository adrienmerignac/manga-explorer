import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {
  anime: any = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private mangaService: MangaService
  ) {}

  ngOnInit() {
    const animeId = this.route.snapshot.paramMap.get('id');
    if (animeId) {
      this.mangaService.getAnimeDetails(+animeId).subscribe((data) => {
        this.anime = data.data;
        this.isLoading = false;
      });
    }
  }
}
