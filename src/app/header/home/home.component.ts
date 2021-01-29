
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Librarybook } from '../library/librarybook.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') bookList: NgForm;
  statuses = ['Read', 'Not Read'];
  // book = {  title: '', author: '', bookType:'', readStatus:''};
  userLibrary = [];

  constructor() { }

  // onAddBook(form:NgForm){
  //   console.log(form);
  // }
  onAddBook() {
    let book = {
      title: this.bookList.value.bookData.title,
      author: this.bookList.value.bookData.author,
      bookType: this.bookList.value.bookData.type,
      readStatus: this.bookList.value.bookData.status
    }
    
    this.userLibrary.push(book);
    console.log(this.userLibrary);



  }

  ngOnInit(): void {}
   

}
