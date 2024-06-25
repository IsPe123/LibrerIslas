import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input() quantity: number = 0;
  @Input() stock: number = 0;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity():void {
    if (this.quantity < this.stock) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity():void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } 
  }
}
