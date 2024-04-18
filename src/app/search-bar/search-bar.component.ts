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
  searchResult$: Observable<any[]>;

  constructor(private searchService: imageService) {
    this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
      console.log(this.myModel)
      this.searchResult$ = this.searchService.getGallery(this.myModel);
    });
  }
  SearchSubmit(newValue: any) {
    console.log('from SearchSubmit', newValue)
    // this.searchService.searchTerm = newValue;
    // console.log('from searchTerm', this.searchService.searchTerm)
    this.modelChanged.next('newValue');

    // this.searchService.setSearchTerm(newValue)

  }
  ngDoCheck() {
    console.log('check run');
  }
}