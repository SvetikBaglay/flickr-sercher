import { Component, OnInit } from '@angular/core';
import { FlickrService, ISize } from '../flickr.service';

@Component({
  selector: 'app-flickr-image',
  templateUrl: './flickr-image.component.html',
  styleUrls: ['./flickr-image.component.css']
})
export class FlickrImageComponent implements OnInit {
  sizes: ISize[] = [];
  searchId: string = '';
  errorMessage = 'No images here. Would you try to search for anything else?'

  constructor(
    private flickServise: FlickrService,
  ) { }

  searchPicture(id: string): void {
    this.flickServise.getInfo(id).subscribe({
      // next: sizes => this.sizes = sizes,
      error: err => this.errorMessage = err
      })
    }

  ngOnInit(): void {
  }

}
