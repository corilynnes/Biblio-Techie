import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishlistComponent } from './header/wishlist/wishlist.component';
import { LibraryComponent } from './header/library/library.component';
import { LibrarianComponent } from './header/librarian/librarian.component';
import { FindBookComponent } from './header/find-book/find-book.component';
import { HeaderComponent } from './header/header.component';
import { LibraryListComponent } from './header/library/library-list/library-list.component';
import { EditLibraryListComponent } from './header/library/edit-library-list/edit-library-list.component';
import { WishlistListComponent } from './header/wishlist/wishlist-list/wishlist-list.component';
import { EditWishlistComponent } from './header/wishlist/edit-wishlist/edit-wishlist.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    LibraryComponent,
    LibrarianComponent,
    FindBookComponent,
    HeaderComponent,
    LibraryListComponent,
    EditLibraryListComponent,
    WishlistListComponent,
    EditWishlistComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
