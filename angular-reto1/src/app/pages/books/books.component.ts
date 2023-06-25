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

          new Book("La Casa de Bernarda Alba", "Literatura", "Federico Garcia Lorca", 50, "Modulo3\angular2\angular-reto1\src\assets\libros\Bernarda_Alba.jpg",10,0),
          new Book("Yerma", "Literatura", "Federico Garcia Lorca", 25, "Modulo3\angular2\angular-reto1\src\assets\libros\Yerma.jpg", 11, 0),
          new Book("La Maquina del Tiempo", "Ciencia Ficcion", "George Wells ", 15,"Modulo3\angular2\angular-reto1\src\assets\libros\Maquina.jpg", 18,0)

        ]

}

agregarLibro(title:string, type:string, author:string, price:number, photo:string, id_book:number) {

  let newBook = new Book(title, type, author, price, photo, id_book);
  this.books.push(newBook);

} 

}
