import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Output() delete = new EventEmitter<string>();
  @Input() even: boolean;

  deleteCard(): void{
    this.delete.emit(this.book.title)
  }

}
