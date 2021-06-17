import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:BookService) { }
  data:any;
  bookForm = this.fb.group({
    id:[''],
    bookname:[''],
    author:[''],
    publisher:[''],
    publishedat:['']
  })
  ngOnInit(): void {
    // this.services.getUsers().subscribe((res)=>{
    //   this.data=res;
    //   console.log(this.data)
    // })
  }
  onSubmit(){
    window.alert("You have Successfully added new Data")
    this.service.postUsers(this.bookForm.value).subscribe((res)=>{
      // console.log(res);
      this.ngOnInit()
    })
  }

}
