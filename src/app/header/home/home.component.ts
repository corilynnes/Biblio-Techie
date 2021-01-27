import { useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('f') bookList: NgForm;
statuses= ['Read', 'Not Read'];
book = {  title: '', author: '', bookType:'', readStatus:''};
userLibrary = [];

  constructor() { }

// onAddBook(form:NgForm){
//   console.log(form);
// }
onAddBook(){
  this.book.title= this.bookList.value.bookData.title;
  this.book.author= this.bookList.value.bookData.author;
  this.book.bookType= this.bookList.value.bookData.type;
  this.book.readStatus= this.bookList.value.bookData.status;
 
  console.log(this.userLibrary);
}

  ngOnInit(): void {
  }

}
