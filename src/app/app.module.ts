import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LibraryComponent } from './header/library/library.component';
import { LibrarianComponent } from './header/library/librarian/librarian.component';
import { FindBookComponent } from './header/find-book/find-book.component';
import { HeaderComponent } from './header/header.component';
import { LibraryListComponent } from './header/library/library-list/library-list.component';


import { DropdownDirective } from './shared/dropdown.directive';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent }, 
  { path: 'librarian', component: LibrarianComponent },
  { path: 'find-book', component: FindBookComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    LibrarianComponent,
    FindBookComponent,
    HeaderComponent,
    LibraryListComponent, 
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
