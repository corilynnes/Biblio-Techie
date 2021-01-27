import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css']
})
export class FindBookComponent implements OnInit {
  url = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=FA0sHTh8qk9DV4CwM5XziyzJA9crvGRB';


  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.fetchList();

  }

  private fetchList() {
    this.http.get(this.url)
      .pipe(
        map(responseData => {
          const listArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              listArray.push({ ...responseData[key], id: key })
            }
          }
          return listArray;
        })
      )
      .subscribe(list => {
        console.log(list);
      })
  }
}
