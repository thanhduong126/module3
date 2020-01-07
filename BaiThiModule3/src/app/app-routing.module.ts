import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { BookCreateComponent } from './component/book-create/book-create.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import { BookUpdateComponent } from './component/book-update/book-update.component';



const routes: Routes = [
  {
    path: "listBook", component: BookComponent
  },
  {
    path: "createBook", component: BookCreateComponent
  },
  {
    path: "updateBook/:id", component: BookUpdateComponent
  }, 
  {
    path: "detailBook/:id", component:  BookDetailComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
