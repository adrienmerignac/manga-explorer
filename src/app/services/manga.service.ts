import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  private API_URL = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}

  getMangas(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/manga`);
  }

  getMangaDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/manga/${id}`);
  }

  getTopMangas(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/top/manga?page=${page}`);
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/genres/manga`);
  }

  getMangasByGenre(genreId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/manga?genres=${genreId}`);
  }

  getTopAnimes(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/top/anime?page=${page}`);
  }

  getAnimeDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/anime/${id}`);
  }

  searchMangas(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/manga?q=${query}`);
  }
}
