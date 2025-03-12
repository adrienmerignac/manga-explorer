import { Component } from '@angular/core';
import { MangaListComponent } from '../../components/manga-list/manga-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MangaListComponent],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
})
export class HomeComponent {}
