import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component .scss']
})
export class LibrarianComponent implements OnInit {
  list= [
    {book_image: "assets/images/Lies.jpg", title: "Lies My Teacher Told Me", author: "James W. Loewen", type: 'Nonfiction', status: 'Not Read'},
    {book_image: "assets/images/Prince.PNG",  title: "The Little Prince", author: "Antoine de Saint-Exupéry", type: 'Fiction', status: 'Not Read'},
    { book_image: "assets/images/Knight.JPG", title: "A Knight of the Seven Kingdoms", author: "George R.R. Martin", type: 'Nonfiction', status: 'Not Read'},
    {book_image: "assets/images/Too.JPG",  title: "Too Fat, Too Slutty, Too Loud: The Rise and Reign of the Unruly Woman", author: "Anne Helen Petersen", type: 'Nonfiction', status: 'Not Read'},
    { book_image: "assets/images/HeLa.JPG", title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", type: 'Nonfiction', status: 'Not Read'},
    {book_image: "assets/images/Assata.JPG",  title: "Assata: An Autobiography", author: "Assata Shakury", type: 'Nonfiction', status: 'Not Read'},
    { book_image: "assets/images/Burried Dreams.JPG", title: "Buried Dreams: Inside the Mind of a Serial Killer", author: "Tim Cahill", type: 'Nonfiction', status: 'Not Read'},
    { book_image: "assets/images/Medici.JPG", title: "The Medici", author: "Paul Strathern", type: 'Nonfiction', status: 'Not Read'},
    { book_image: "assets/images/Prince.JPG", title: "The Prince", author: "Niccolò Machiavelli", type: 'Nonfiction', status: 'Not Read'},
    { book_image: "assets/images/witcher.JPG", title: "The Witcher: The Last Wish", author: "Andrzej Sapkowski", type: 'Fiction', status: 'Not Read'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

