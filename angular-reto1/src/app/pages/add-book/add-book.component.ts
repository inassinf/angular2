import { Component } from '@angular/core';
import { Book } from 'src/app/models/books';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public books: Book[];

    constructor(public bookService: BooksService, public router:Router) {
  
    this.books =this.bookService.getAll();
    
  }   

  addLibro(title:string, type:string, author:string, price:number, photo:string, id_book:number):void {

    let newBook = new Book(title, type, author, price, photo, id_book,0);

    this.bookService.addLibro(newBook);
    this.router.navigate(['/books'])
  
  } 

}
