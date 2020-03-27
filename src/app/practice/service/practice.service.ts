import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookType } from './bookModel';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  bookUrl = '../../assets/data/bookdata.json';
  bookData;
  constructor(private http: HttpClient) { }

  getDate() {
    return new Date();
  }
  getBookData(): Observable<bookType[]> {
    return this.http.get<bookType[]>(this.bookUrl);
  }
}
