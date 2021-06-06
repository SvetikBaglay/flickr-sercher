import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
