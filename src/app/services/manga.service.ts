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

  searchMangas(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/manga?q=${query}`);
  }
}
