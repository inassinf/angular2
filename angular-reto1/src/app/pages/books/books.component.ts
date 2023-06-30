import { Component } from '@angular/core';
import { Book } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

      constructor() {

        this.books = [

          new Book("La Casa de Bernarda Alba", "Literatura", "Federico Garcia Lorca", 50, "https://www.cervantestheatre.com/home/img/Poster_LCDBA_web.jpg", 10, 0),
          new Book("Yerma", "Literatura", "Federico Garcia Lorca", 25, "https://unbuendiaenmadrid.com/wp-content/uploads/2017/10/Yerma_Qwantiq_800x1200-e1506948212525.jpg", 11, 0),
          new Book("La Maquina del Tiempo", "Ciencia Ficcion", "George Wells ", 15,"https://m.media-amazon.com/images/I/51T2VLwKzXL.jpg", 18, 0),

        ]

}

addLibro(title:string, type:string, author:string, price:number, photo:string, id_book:number) {

  let newBook = new Book(title, type, author, price, photo, id_book);
  this.books.push(newBook);

} 

}
