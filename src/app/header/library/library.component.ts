import { Component, OnInit } from '@angular/core';
import { Librarybook } from './librarybook.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [LocalStorageService]
})
export class LibraryComponent implements OnInit {
  userLibrary=[];
  constructor(
    private libraryListService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.userLibrary = JSON.parse(localStorage.getItem("books"));
    // this.userLibrary = this.libraryListService.getUserLibrary();
    // this.libraryListService.userLibraryChanged
    //   .subscribe(
    //     (userLibrary: Librarybook[]) => {
    //       this.userLibrary = userLibrary;
    //       console.log(this.userLibrary);
    //       console.log("Hey");
    //     }
    // );
    // console.log(this.userLibrary);
 

   
  }

}
