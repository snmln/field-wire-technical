import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  imgSrc: string;
  showModal = false;

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
