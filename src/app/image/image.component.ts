import { Component, OnInit } from '@angular/core';
import { imageService } from '../image-fetch.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit{
  images: any;
  imgSrc: string;
  showModal = false;
  constructor(public imageService: imageService){

  }

  ngOnInit(){
    this.imageService.currentImages.subscribe(newImages => {this.images = newImages
      console.log('newImages', newImages)}
    );

  }
 

  onClick(event: any) {
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.toggleModal();
    this.imgSrc = srcAttr.nodeValue;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
