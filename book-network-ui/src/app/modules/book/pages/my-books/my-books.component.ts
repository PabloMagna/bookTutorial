import { Component, OnInit } from '@angular/core';
import { PageResponseBookResponse } from '../../../../services/models/page-response-book-response';
import { BookService } from '../../../../services/services';
import { Router } from '@angular/router';
import { BookResponse } from '../../../../services/models';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit {

  page = 0;
  size = 1;
  bookResponse: PageResponseBookResponse ={};

  constructor(
    private bookService: BookService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.findAllBooks();
  }

  findAllBooks() {
    this.bookService.findAllBooksByOwner({
      page: this.page, size: this.size
    }).subscribe({
      next: (books) =>{
        this.bookResponse = books;
      }
  })}

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }
  goToPreviousPage() {
    this.page--;
    this.findAllBooks();
  }
  goToPage(page: number) {
    this.page = page;
    this.findAllBooks();
  }
  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }
  goToLastPage() {
    this.page = this.bookResponse.totalPages as number -1;
    this.findAllBooks();
  }
  
  get isLastPage() : boolean {
    return this.page == this.bookResponse.totalPages as number -1;
   }

   archiveBook(book: BookResponse) {
    throw new Error('Method not implemented.');
    }
    shareBook(book: BookResponse) {
    throw new Error('Method not implemented.');
    }
    editBook(book: BookResponse) {
    throw new Error('Method not implemented.');
    }

}
