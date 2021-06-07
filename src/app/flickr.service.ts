import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PathLocationStrategy } from '@angular/common';

export interface SearchResponse {
  photos: {
    page: number,
    pages: string,
    perpage: number,
    total: string,
    photo: IPhoto[],
    stat: 'ok'
  }
}

export interface IPhoto {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  title: string,
  ispublic: number,
  isfriend: number,
  isfamily: number
}

export interface SizeResponse {
  sizes: {
    canblog: number,
    canprint: number,
    candownload: number,
    size: ISize[],
    stat: 'ok'
  }
}

export interface ISize {
  label: string,
  width: number,
  height: number,
  source: string,
  url: string,
  media: string
}

@Injectable({
  providedIn: 'root'
})

export class FlickrService {
  private apiKey = "3bbea5d9c2eba88058bb34d49852164a";
  private secret = "6a73d3bcaedf05cc";
  private url = "https://www.flickr.com/services/rest/";

  constructor(private httpClient: HttpClient) { }

  search(text: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(this.url, { params: { text, api_key: this.apiKey, format: 'json', method: 'flickr.photos.search', nojsoncallback: '1' } });
  }

  getInfo(id: string): Observable<SizeResponse> {
    return this.httpClient.get<SizeResponse>(this.url, { params: { id, api_key: this.apiKey, format: 'json', method: 'flickr.photos.getSize', nojsoncallback: '1' } });
  }
}
