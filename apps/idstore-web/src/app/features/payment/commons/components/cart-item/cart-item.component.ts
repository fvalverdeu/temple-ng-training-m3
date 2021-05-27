import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();
  @Output() increment: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decrement: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(): void {
    this.remove.emit(this.cartItem.id);
  }

  incrementProduct(): void {
    this.increment.emit(this.cartItem);
  }

  decrementProduct(): void {
    this.decrement.emit(this.cartItem);
  }


}
