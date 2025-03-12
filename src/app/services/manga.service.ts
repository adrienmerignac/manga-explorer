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

  getTopMangas(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/top/manga`);
  }

  searchMangas(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/manga?q=${query}`);
  }
}
