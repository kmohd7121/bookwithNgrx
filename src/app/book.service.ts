import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/books';
import { BookState } from './state/book.state';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  url='https://60bf32f197295a0017c4212e.mockapi.io/api/v1/books';

  postUsers(bookForm: any){
    return this.http.post<any>(this.url,bookForm)
  }

  getBooks(){
    return this.http.get<any>(this.url)
  }
  getDelete(id:any){
    return this.http.delete<any>(`https://60bf32f197295a0017c4212e.mockapi.io/api/v1/books/${id}`)
  }
  updateBook(value:any,form:any){
    return this.http.patch(`https://60bf32f197295a0017c4212e.mockapi.io/api/v1/books${value}`,form)
  }
}
