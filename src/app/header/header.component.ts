import { Component, OnInit } from '@angular/core';
import { LibraryListService } from './shared/library-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LibraryListService]
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
