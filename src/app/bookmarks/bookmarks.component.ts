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
    private bookmarkServise: BookmarkService,
  ) { }

  ngOnInit(): void {
    this.savePhotos = this.bookmarkServise.getPhotos()
  }

}
