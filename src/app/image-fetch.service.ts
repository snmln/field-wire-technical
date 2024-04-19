import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class imageService {

  apiUrl = 'https://api.imgur.com/3/gallery/search/';

  constructor(private http: HttpClient) { }


  getGallery(searchTerm: string): Observable<any[]> {
    let header = new HttpHeaders().set(
      "Authorization",
      "Client-ID 0a9df8956ed166a"
    );

    return this.http.get<any[]>(`${this.apiUrl}/search/?q=${searchTerm}`, { headers: header });
  }
}