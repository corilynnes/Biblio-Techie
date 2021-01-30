
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') bookList: NgForm;
  statuses = ['Read', 'Not Read'];
  // book = {  title: '', author: '', bookType:'', readStatus:''};
  @Input() userLibrary = []; 

  constructor() { }


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
