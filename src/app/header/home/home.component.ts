
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryListService } from '../shared/library-list.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LibraryListService]
})
export class HomeComponent implements OnInit {
  @ViewChild('f') bookList: NgForm;
  statuses = ['Read', 'Not Read'];
  // book = {  title: '', author: '', bookType:'', readStatus:''};
  userLibrary=[];

  constructor(private libraryListService: LibraryListService) { 

  }

  ngOnInit(): void {
    this.userLibrary = this.libraryListService.getUserLibrary();
   
  }
  

  onAddBook() {
    let book = {
      title: this.bookList.value.bookData.title,
      author: this.bookList.value.bookData.author,
      bookType: this.bookList.value.bookData.type,
      readStatus: this.bookList.value.bookData.status
    }
    this.bookList.reset();
    // this.userLibrary.push(book);
    this.libraryListService.addBook(book);
    console.log(this.userLibrary);



  }

  

}

