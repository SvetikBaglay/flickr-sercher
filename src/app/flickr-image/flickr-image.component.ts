import { Component, OnInit, Input } from '@angular/core';
import { FlickrService, IPhoto, ISize } from '../flickr.service';

@Component({
  selector: 'app-flickr-image',
  templateUrl: './flickr-image.component.html',
  styleUrls: ['./flickr-image.component.css']
})
export class FlickrImageComponent implements OnInit {
  private sizes: ISize[] = [];
  largeSquare: ISize;
  requestPending: boolean = false;

  @Input() imageTitle: string;
  @Input() imageTag: string;
  @Input() imageId: string;
  @Input() onBookmark: (id: string, title: string, tag: string) => void;
  @Input() onUnbookmark: (id: string) => void;
  @Input() isBookmarked: boolean = false;


  constructor(
    private flickServise: FlickrService,
  ) { }

  getPicture(id: string): void {
    this.requestPending = true;
    this.flickServise.getInfo(id).subscribe({
      next: (resp) => {
        this.sizes = resp.sizes.size;
        this.largeSquare = this.getSizeByLabel('Large Square');
        this.requestPending = false;
      },
      error: console.log
      })
  }
  handleBookmark (id: string, title: string, tag: string) {
    this.onBookmark(id, title, tag);
  }

  handleUnbookmark(id: string) {
    this.onUnbookmark(id);
  }

  getSizeByLabel(label: string) {
    return this.sizes.find((size) => size.label === label);
  }

  ngOnInit(): void {
    this.getPicture(this.imageId);
  }
}
