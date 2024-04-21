import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class imageService {

  apiUrl = 'https://api.imgur.com/3/gallery/search/';
  public imagesSource = new BehaviorSubject<any>('heelo');

  currentImages = this.imagesSource.asObservable()

  constructor(private http: HttpClient) { }

  setImages(images: any) {

    this.imagesSource.next(images);
  }

  getImages() {
return this.imagesSource;
  }

  getGallery(searchTerm: string) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Client-ID 0a9df8956ed166a"
    );
    
    return this.http.get<any>(`${this.apiUrl}/search/?q=${searchTerm}`, { headers: header }).subscribe(results =>{


      this.imagesSource.next(results);

    })
  }
}