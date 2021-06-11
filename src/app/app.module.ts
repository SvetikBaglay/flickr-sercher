import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HttpClientModule } from '@angular/common/http';
import { FlickrImageComponent } from './flickr-image/flickr-image.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmarksComponent,
    FlickrImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      { path: 'bookmarks', component: BookmarksComponent },
      { path: '**', redirectTo: 'search', pathMatch: 'full'},
    ]),
    NgbModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/flickr-sercher/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
