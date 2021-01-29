import { Component, OnInit } from '@angular/core';
import { LibraryListService } from '../../shared/library-list.service';
import { Librarybook } from '../librarybook.model';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  libraryBook: Librarybook[];
  constructor(private libraryList: LibraryListService) { }

  ngOnInit(): void {

    
  }

}
