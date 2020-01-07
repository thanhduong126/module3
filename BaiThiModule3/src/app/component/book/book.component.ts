import { Component, OnInit } from '@angular/core';
import { Book } from './../model/book';
import { BookService } from './../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book[]=[];
  p: number = 1
  constructor(private bookService: BookService, private router:Router) { }
  id:number;
  ngOnInit() {
    this.bookService.getAllBook().subscribe(data=>{
      this.book=data;
    })
  }
  deleteBook = function (id: number) {
    this.bookService.deleteBook(id).subscribe(data =>{
        this.bookService.getAllBook().subscribe(data => {
          this.book = data;
        this.router.navigateByUrl("/listBook");
      })}
    )
  }

  detailBook(id: number) {
    this.router.navigateByUrl("/detailBook/" + id)
  }


}
