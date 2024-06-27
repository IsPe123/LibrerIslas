import { Component } from '@angular/core';
import { Book } from '../book-list/book';
import { BookCartService } from '../book-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartList$: Observable<Book[]>;
  constructor(private cart: BookCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  trackByFn(index: number, item: Book): number {
    return item.id;
  }
}
