import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from './../service/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id:number;
  book:Book;
  constructor(private bookService:BookService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
    this.bookService.getBook(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book)
    })
  }
  deleteBook = function (id: number) {
    if(confirm("Bạn có muốn xóa không!")){
    this.bookService.deleteBook(id).subscribe(data =>
      this.bookService.getAllBook().subscribe(data => {
        this.book = data;
        this.router.navigateByUrl("/listBook");
        console.log(this.book);
      })
    )
  }
  }

  updateBook(id: number) {
    this.router.navigateByUrl("/updateBook/" + id)
  }

  listBook(){
    this.router.navigateByUrl("/listBook")
  }
}
