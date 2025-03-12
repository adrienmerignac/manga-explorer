import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss'],
})
export class MangaListComponent implements OnInit {
  mangas: any[] = [];

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.mangaService.getMangas().subscribe((data) => {
      this.mangas = data.data; // 📚 Stocker les mangas
    });
  }
}
