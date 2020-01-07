import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from './../service/book.service';
import { Router } from '@angular/router';
import { Book } from './../model/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  Contact: FormGroup;
  book: any[];
  constructor(private bookService:BookService,private router:Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.Contact=this.fb.group({
      id: [''],
      title:[''],
      author:[''],
      description:['']
    })
  }
  addNewBook(bookobj) {
    if(this.Contact.valid) {
      this.bookService.createBook(new Book(bookobj.id,bookobj.title,bookobj.author,bookobj.description)).subscribe(data => {
        this.router.navigateByUrl("/listBook")
      });
    }}
}
