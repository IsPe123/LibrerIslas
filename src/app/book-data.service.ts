import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book-list/book';

const URL = 'https://631f56b758a1c0fe9f66eb63.mockapi.io/books/books';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(URL);
  }
}
