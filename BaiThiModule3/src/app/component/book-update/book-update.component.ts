import { Component, OnInit } from '@angular/core';
import { Book } from './../model/book';
import { BookService } from './../service/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id:number;
  book:Book;
  constructor(private bookService:BookService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    this.bookService.getBook(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book)
    })
  }
  updateBook = function () {
    this.bookService.updateBook(this.book).subscribe(data1=>{
      this.router.navigateByUrl("/listBook")})
  }
}
