import { Injectable } from '@angular/core';
import { IdsCartService } from '@idstore/commons/services/cart/cart.service';
import { CartItem } from '../../models/cart.model';

@Injectable()
export class CartPresenter {

  cart: CartItem[];

  constructor(private cartService: IdsCartService) {}

  getCart(): void {
    const iCart = this.cartService.getCart();
    this.cart = iCart.map(item => new CartItem(item));
  }

  remove(id: string) {
    this.cartService.remove(id)
    this.getCart();
  }
  increment(cartItem: CartItem): void {
    // this.cartService.add(cartItem.getItem(), 1);
    this.cartService.increment(cartItem, 1);
    this.getCart();
  }
  decrement(cartItem: CartItem): void {
    const total = this.cartService.getQuantity(cartItem.id);
    if (total === 1) this.remove(cartItem.id);
    else  this.cartService.decrement(cartItem);
    this.getCart();
  }

  getAmount(): number {
    return this.cartService.getTotalAmount();
  }
}
