import { Injectable } from '@angular/core';
import { Book } from "../models/books";
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[]

  constructor() {

    this.books=[

      new Book("La Casa de Bernarda Alba", "Literatura", "Federico Garcia Lorca", 50, "https://www.cervantestheatre.com/home/img/Poster_LCDBA_web.jpg", 10, 0),
      new Book("Yerma", "Literatura", "Federico Garcia Lorca", 25, "https://unbuendiaenmadrid.com/wp-content/uploads/2017/10/Yerma_Qwantiq_800x1200-e1506948212525.jpg", 11, 0),
      new Book("La Maquina del Tiempo", "Ciencia Ficcion", "George Wells ", 15,"https://m.media-amazon.com/images/I/51T2VLwKzXL.jpg", 18, 0),

    ]

  }

     getAll(): Book[]{

      return this.books;

     }


   getOne(id_libro: number): Book{
    return this.books.find(Book => Book.id_book == id_libro)
   }


   add(book: Book): void{
      this.books.push(book)
   }

   edit(book: Book): boolean{

    for(let i=0; i<this.books.length;i++){
      if(this.books[i].id_book == book.id_book){
        this.books[i]= book
        return true;
     }  
    }
   }
   delete(id_book: number): boolean{

    for(let i=0; i<this.books.length;i++){
      if (this.books[i].id_book == id_book) {
        this.books.splice(i, 1);
        return true;
      }
    }



   }



   
}
