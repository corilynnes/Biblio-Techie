import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  list= [
    { title: "Lies My Teacher Told Me", author: "James W. Loewen", type: 'Nonfiction', status: 'Not Read'},
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", type: 'Fiction', status: 'Not Read'},
    { title: "A Knight of the Seven Kingdoms", author: "George R.R. Martin", type: 'Nonfiction', status: 'Not Read'},
    { title: "Too Fat, Too Slutty, Too Loud: The Rise and Reign of the Unruly Woman", author: "Anne Helen Petersen", type: 'Nonfiction', status: 'Not Read'},
    { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", type: 'Nonfiction', status: 'Not Read'},
    { title: "Assata: An Autobiography", author: "Assata Shakury", type: 'Nonfiction', status: 'Not Read'},
    { title: "Buried Dreams: Inside the Mind of a Serial Killer", author: "Tim Cahill", type: 'Nonfiction', status: 'Not Read'},
    { title: "The Medici", author: "Paul Strathern", type: 'Nonfiction', status: 'Not Read'},
    { title: "The Prince", author: "Niccolò Machiavelli", type: 'Nonfiction', status: 'Not Read'},
    { title: "The Witcher: The Last Wish", author: "Andrzej Sapkowski", type: 'Fiction', status: 'Not Read'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
