import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('f') bookList: NgForm;
status= ['READ', 'NOT READ'];
  constructor() { }

// onAddBook(form:NgForm){
//   console.log(form);
// }
onAddBook(){
  console.log(this.bookList);
}

  ngOnInit(): void {
  }

}
