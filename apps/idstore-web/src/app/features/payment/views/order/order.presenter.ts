import { ECartIgv } from './../../../../../../../../libs/idstore-commons/src/lib/constants/cart.constans';
import { Injectable } from '@angular/core';
import { IdsCartService } from '@idstore/commons/services/cart/cart.service';
import { CartItem } from '../../models/cart.model';

@Injectable()
export class OrderPresenter {

  cart: CartItem[];

  constructor(private cartService: IdsCartService) {}

  getCart(): void {
    const iCart = this.cartService.getCart();
    this.cart = iCart.map(item => new CartItem(item));
  }

  getAmount(): number {
    return this.cartService.getTotalAmount();
  }

  getAmountWithIgv(): number {
    return this.cartService.getTotalAmount() * (ECartIgv.IGV + 1)
  }
}
