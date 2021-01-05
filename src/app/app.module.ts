import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LibraryComponent } from './library/library.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { FindBookComponent } from './find-book/find-book.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    LibraryComponent,
    LibrarianComponent,
    FindBookComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
