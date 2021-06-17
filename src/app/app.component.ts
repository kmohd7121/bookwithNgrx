import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookService } from './book.service';
import { AppState } from './state/app.store';
import { get_BOOK } from './state/book.action';
import { getBooks } from './state/book.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Books';
  data:any;
  constructor(private services:BookService,private store: Store<AppState> ){}

  ngOnInit(): void {

    // this.services.getBooks().subscribe((res)=>{
    //   this.data=res;
    //   console.log(this.data)
    // })
    this.store.dispatch(get_BOOK())
    this.store.select(getBooks).subscribe((data)=>{
      console.log(data)
      // this.data=data;
    })
  }
  delete(id:any){
    window.alert("you have successfully Deleted")
    this.services.getDelete(id).subscribe((res)=>{
      // console.log(res)
      this.ngOnInit()
    })
  }
  // edit(id:any){

  // }
}
