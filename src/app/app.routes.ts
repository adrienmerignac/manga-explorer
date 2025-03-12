import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';
import { FavorisComponent } from './pages/favoris/favoris.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manga/:id', component: MangaDetailsComponent },
  { path: 'favoris', component: FavorisComponent },
];
