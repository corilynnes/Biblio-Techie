import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css']
})

export class FindBookComponent implements OnInit {
  url = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=FA0sHTh8qk9DV4CwM5XziyzJA9crvGRB';
  
  listArray= [];

  constructor(private http: HttpClient) {  }


  ngOnInit() {
    this.http.get<any>(this.url).subscribe(list=>{
      this.listArray = list.results.books;
      console.log(this.listArray);
    })

  }

}
