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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmarksComponent,
    FlickrImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      { path: 'bookmarks', component: BookmarksComponent },
      { path: '**', redirectTo: 'search', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
