import { Component, EventEmitter, Output } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm$ = new Subject<string>();
  suggestions: any[] = [];
  isLoading = false;

  @Output() selectedManga = new EventEmitter<number>();

  constructor(private mangaService: MangaService) {
    this.searchTerm$
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((term) => {
          this.isLoading = true;
          return this.mangaService.searchMangas(term);
        })
      )
      .subscribe((data) => {
        this.suggestions = data.data;
        this.isLoading = false;
      });
  }

  searchMangas(term: string) {
    if (term.length > 2) {
      this.searchTerm$.next(term);
    } else {
      this.suggestions = [];
    }
  }

  selectManga(mangaId: number) {
    this.suggestions = [];
    this.selectedManga.emit(mangaId);
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchMangas(inputElement.value);
  }
}
