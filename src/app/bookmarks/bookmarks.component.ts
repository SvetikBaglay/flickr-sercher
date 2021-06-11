import { Component, OnInit } from '@angular/core';
import { BookmarkService, IBookmark  } from '../bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  savePhotos: IBookmark[];

  constructor(
    private bookmarkService: BookmarkService,
  ) { }

  onBookmark = (id: string, title: string, tag: string): void => {
    this.bookmarkService.addPhoto({ id, title, tag });
  }

  onUnbookmark = (id: string): void => {
    this.savePhotos = this.bookmarkService.removePhoto(id)
  }

  isPhotoBookmarked(id: string): boolean {
    return this.bookmarkService.checkPhoto(id);
  }

  ngOnInit(): void {
    this.savePhotos = this.bookmarkService.getPhotos()
  }

}
