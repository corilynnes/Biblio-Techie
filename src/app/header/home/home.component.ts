
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Librarybook } from '../library/librarybook.model';
import { StorageService } from '../shared/storage.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StorageService]
})
export class HomeComponent implements OnInit {
  @ViewChild('f', { static: false }) bookList: NgForm;
  statuses = ['Read', 'Need To Read'];
  userLibrary = [];

  constructor(private storageService: StorageService) {

  }

  ngOnInit(): void {
  // this.userLibrary = JSON.parse(sessionStorage.getItem("books"));
 

  }


  onAddBook() {
  this.userLibrary = JSON.parse(localStorage.getItem("books"));

    const title = this.bookList.value.bookData.title;
    const author = this.bookList.value.bookData.author;
    const type = this.bookList.value.bookData.type;
    const status = this.bookList.value.bookData.status;
    const newLibraryBook = new Librarybook(title, author, type, status)
    this.userLibrary.push(newLibraryBook);

    this.storageService.setItem("books", JSON.stringify(this.userLibrary));
    this.bookList.reset();

    console.log(newLibraryBook);
    console.log(this.userLibrary);
  }



}

