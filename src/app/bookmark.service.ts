import { Injectable } from '@angular/core';


export interface IBookmark {
  id: string;
  title: string;
  tag: string;
}

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {
  constructor() { }

  addPhoto(photo: IBookmark) {
    let photos = this.getPhotos();
    photos.push(photo);
    localStorage.setItem('savedPhotos', JSON.stringify(photos));
  }

  getPhotos(): IBookmark[] {
    const savedPhotos = localStorage.getItem('savedPhotos');
    if (savedPhotos) {
      return JSON.parse(savedPhotos);
    }
    return [];
  }

  removePhoto(id: string) {
    let deletePhoto = [];
    let photos = this.getPhotos();
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].id != id) {
        deletePhoto.push(photos[i])
       }
    }
    localStorage.setItem('savedPhotos', JSON.stringify(deletePhoto));
    return deletePhoto
  }

  checkPhoto(id: string) {
    let photos = this.getPhotos();
    let i = 0;
    for (i = 0; i < photos.length; i++) {
      if (photos[i].id === id) {
        return true
      }
    }
    return false;
  }

}


