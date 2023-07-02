import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from "src/app/models/books";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() titleBook = new EventEmitter<string>();
  @Input() even: boolean;

  enviarTitle():void{
    this.titleBook.emit(this.book.title)
  }

}
