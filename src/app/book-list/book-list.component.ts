import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  book = {
    "libro": "La Biblia",
    "autor": "Varios",
    "paginas": 500,
    "editorial": "Oceano",
    "precio": 20000
  }
}
