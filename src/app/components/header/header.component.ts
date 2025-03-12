import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, SearchBarComponent], // ✅ Ajout du routing pour les liens
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navigateToManga(mangaId: number) {
    window.location.href = `/manga/${mangaId}`; // ✅ Redirige vers la page de détails
  }
}
