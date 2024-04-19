import { Component, DoCheck } from '@angular/core';
import { imageService } from '../image-fetch.service';
import { debounceTime } from 'rxjs/operators';
import { Subject, Observable } from "rxjs";



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements DoCheck {
  myModel: string;
  modelChanged = new Subject<string>();
  searchResult$: any[];

  constructor(private searchService: imageService) {
    this.modelChanged.pipe(debounceTime(300)).subscribe((data) => {

      this.searchService.getGallery(this.myModel).subscribe((data) => {
        console.log('data', data);
      })
    });
  }
  SearchSubmit(newValue: any) {
    this.modelChanged.next(newValue);

  }
  ngDoCheck() {
    console.log('check run');
  }
}