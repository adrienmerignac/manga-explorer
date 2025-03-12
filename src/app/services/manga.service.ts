import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  private API_URL = 'https://api.jikan.moe/v4/manga';

  constructor(private http: HttpClient) {}

  getMangas(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}`);
  }

  getMangaDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  searchMangas(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}?q=${query}`);
  }
}
