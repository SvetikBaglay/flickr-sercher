import { Injectable } from '@angular/core';
import { IPhoto } from './flickr.service'

export interface IBookmark {
  id: string
}

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {
  savePhotos: IBookmark[] = [{id: "51232641172"}];

  constructor() { }

  addPhoto(photo: IPhoto) {
    this.savePhotos.push({ id: photo.id });
    return this.savePhotos
  }

  getPhotos(): IBookmark[] {
    return this.savePhotos;
  }

  removePhoto(id: string) {
    let deletePhoto = [];
    for (let i = 0; i < this.savePhotos.length; i++) {
      if (this.savePhotos[i].id != id) {
        deletePhoto.push(this.savePhotos[i])
       }
    }
    this.savePhotos = deletePhoto;
  }

  checkPhoto(id: string) {
    let i = 0;
    for (i = 0; i < this.savePhotos.length; i++) {
      if (this.savePhotos[i].id != id ) {
        return true
      } else {
        false
      }
    }
  }

}
