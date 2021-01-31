import { Component, Input, OnInit } from '@angular/core';
import { LibraryListService } from '../shared/library-list.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [LibraryListService]
})
export class LibraryComponent implements OnInit {
  userLibrary = [];
  constructor(private libraryListService: LibraryListService) { }

  ngOnInit(): void {
    this.userLibrary = this.libraryListService.getUserLibrary();
  //   this.libraryListService.userLibraryChanged
  //   .subscribe(
  //  (userLibrary)=>{
  //    this.userLibrary = userLibrary
  //  }
  //   );
console.log(this.userLibrary)
  }

}
