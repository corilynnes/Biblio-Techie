import { Component, OnInit } from '@angular/core';
import { Librarybook } from './librarybook.model';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [StorageService]
})
export class LibraryComponent implements OnInit {
  userLibrary = [];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.userLibrary = JSON.parse(localStorage.getItem("books"));
  }

  // onClearList() {
  //   this.storageService.removeItem("books");
  // }
}
