import { Injectable } from '@angular/core';
import { Book } from './book-list/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {
  
  private _cartList: Book[] = [];
  cartList: BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(book: Book) {
    let item = this._cartList.find((v1) => v1.libro == book.libro);
    if (!item) {
      this._cartList.push(book);
    } else {
      item.quantity+= book.quantity;
    }
  }

}
