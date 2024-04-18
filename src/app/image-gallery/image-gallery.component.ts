import { Component } from '@angular/core';
import { ImageServiceService } from '../image-service.service';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {

  posts: any[] = [];

  constructor(private imageService: ImageServiceService) { }

  ngOnInit() {
    this.imageService.getGallery().subscribe((data: any[]) => {
      this.posts = data;
      console.log(this.posts)
    });
  }
}

