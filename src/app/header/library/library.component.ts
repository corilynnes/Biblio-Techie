import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
 @Input() userLibrary = [];
  constructor() { }

  ngOnInit(): void {
   
  }

}
 