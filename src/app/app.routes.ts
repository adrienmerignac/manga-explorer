import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anime', component: AnimeListComponent },
  { path: 'manga/:id', component: MangaDetailsComponent },
  { path: 'anime/:id', component: AnimeDetailComponent }, // ✅ Route for anime details
  { path: 'favoris', component: FavorisComponent },
];
