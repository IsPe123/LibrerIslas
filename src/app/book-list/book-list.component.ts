import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[] = [
    {
      libro: 'La Biblia',
      autor: 'Varios',
      paginas: 500,
      editorial: 'Oceano',
      precio: 20000,
      stock: 2,
      id: 1,
      quantity: 0,
    },
    {
      libro: 'El Principito',
      autor: 'Alguien',
      paginas: 300,
      editorial: 'Oceano',
      precio: 10000,
      stock: 0,
      id: 2,
      quantity: 0,
    },
    {
      libro: 'Maestria',
      autor: 'Robert Green',
      paginas: 420,
      editorial: 'Oceano',
      precio: 23000,
      stock: 2,
      id: 3,
      quantity: 0,
    },
    {
      libro: 'Otro',
      autor: 'Bla bla bla',
      paginas: 500,
      editorial: 'Oceano',
      precio: 15000,
      stock: 5,
      id: 4,
      quantity: 0,
    }
  ];

}
