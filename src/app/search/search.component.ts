import { Component, OnInit } from '@angular/core';
import { FlickrService, SearchResponse, IPhoto } from '../flickr.service';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  pages: number | null = null;
  photos: IPhoto[] = [];
  searchText: string = '';
  requestPending: boolean = false;
  page: number = 1;
  photosTotal: number;
  constructor(
    private flickServise: FlickrService,
    private bookmarkService: BookmarkService
  ) { }

  handleSearch(page: number): void {
    this.requestPending = true;
    this.flickServise.search(this.searchText, page.toString()).subscribe({
      next: (resp: SearchResponse) => {
        this.requestPending = false;
        this.photosTotal = +resp.photos.total;
        this.photos = resp.photos.photo;
        this.page = resp.photos.page;
        this.pages = +resp.photos.pages;
      },
      error: console.log
    });
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.handleSearch(this.page);
  }

  onChangePage(page: number): void {
    this.handleSearch(page);
  }

  isPhotoBookmarked(id: string): boolean {
    return this.bookmarkService.checkPhoto(id);
  }

  onBookmark = (id: string, title: string, tag: string): void => {
    this.bookmarkService.addPhoto({ id, title, tag })
  }

  onUnbookmark = (id: string): void => {
    this.bookmarkService.removePhoto(id)
  }

  ngOnInit(): void {
  }
}
