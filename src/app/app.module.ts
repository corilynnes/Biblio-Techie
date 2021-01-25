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
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'librarian', component: LibrarianComponent },
  { path: 'find-book', component: FindBookComponent }

]
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
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
