import { Component, OnInit } from '@angular/core';
import { FlickrService, SearchResponse, IPhoto } from '../flickr.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private page: number | null = null;
  private pages: number | null = null;
  photos: IPhoto[] = [];
  searchText: string = '';
  requestPending: boolean = false;
  constructor(
    private flickServise: FlickrService,
  ) { }

  handleSearch(e: Event): void {
    console.log('handleSearch');

    e.preventDefault();
    this.requestPending = true;
    this.flickServise.search(this.searchText).subscribe({
      next: (resp: SearchResponse) => {
        this.requestPending = false;
        this.photos = resp.photos.photo;
        this.page = resp.photos.page;
        this.pages = +resp.photos.pages;
      },
      error: console.log
    });
  }

  ngOnInit(): void {
  }
}
