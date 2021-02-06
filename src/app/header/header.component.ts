import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './shared/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LocalStorageService]
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
