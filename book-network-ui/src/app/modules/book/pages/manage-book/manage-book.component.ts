import { Component } from '@angular/core';
import { BookRequest } from '../../../../services/models';
import { BookService } from '../../../../services/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.scss'
})
export class ManageBookComponent {


  bookRequest: BookRequest ={
    authorName: '',
    isbn: '',
    synopsis: '',
    title: ''
  };
  erroMsg: Array<string> = [];
  selectedPicture: string | undefined;
  selectedBookCover:any;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);
    if(this.selectedBookCover){
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
    }  
  }

  saveBook() {
    this.bookService.saveBook({
      body:this.bookRequest
    }).subscribe({
      next:(bookId) => {
        this.bookService.uploadBookCoverPicture(
          {
            'book-id': bookId,
            body: {
              file: this.selectedBookCover
            }
          }).subscribe({
            next: () => {
              this.router.navigate(['/books/my-books']);
            }
          })
      },
      error:(err) =>{
        this.erroMsg = err.error.validationErrors;
      }
    })
    }
}
