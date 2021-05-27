import { IdsStorageService } from './../storage/storage.service';
import { Product } from '@idstore/commons/models/product.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICartItem } from '@idstore/commons/interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class IdsCartService {

  itemsInCart: Subject<number> = new Subject<number>();

  constructor(private storageService: IdsStorageService) { }

  createCart(): void {
    if (!this.getCart())
      this.storageService.setCart([]);
  }

  getQuantity(productId: string): number {
    const item = this.getItem(productId);
    return item ? item.quantity : 0;
  }

  getItem(id: string): ICartItem {
    const cart = this.getCart();
    return cart.find(item => item.id === id);
  }

  getTotalQuantity(): number {
    const cart = this.getCart();
    let total = 0;
    cart.map(item => {
      total += item.quantity;
    });
    return total;
  }

  getCart(): ICartItem[] {
    return this.storageService.getCart();
  }

  productToItem(product: Product): ICartItem {
    const item: ICartItem = {
      id: product._id, name: product.name, image: product.pathImage, unitPrice: product.price, quantity: 0
    }
    return item;
  }

  increment(cartItem: ICartItem, quantityItem: number = 1): void {
    const cart: ICartItem[] = [...this.getCart()];
    const quantity = this.getQuantity(cartItem.id);
    if (quantity > 0) {
      let item = this.getItem(cartItem.id);
      item.quantity += quantityItem;
      const index = cart.findIndex(item => item.id === cartItem.id);
      if (index != null) cart[index] = item;
      this.updateCart(cart);
    }
    else {
      if (quantity === 0) this.add(cartItem);
    }
  }

  decrement(cartItem: ICartItem): void {
    const cart: ICartItem[] = [...this.getCart()];
    const quantity = this.getQuantity(cartItem.id);
    if (quantity === 1) this.remove(cartItem.id);
    else if (quantity > 0) {
      let item = this.getItem(cartItem.id);
      item.quantity--;
      const index = cart.findIndex(item => item.id === cartItem.id);
      if (index != null) cart[index] = item;
      this.updateCart(cart);
    }
  }

  remove(idProduct: string): void {
    const cart = [...this.getCart()];
    // const quantity = this.getQuantity(idProduct);
    const index = cart.findIndex(item => item.id === idProduct);
    cart.splice(index, 1);
    this.updateCart(cart);
  }

  private add(cartItem: ICartItem): void {
    const cart = [...this.getCart()];
    const quantity = this.getQuantity(cartItem.id);
    if (quantity === 0) {
      cartItem.quantity++;
      cart.push(cartItem);
    }
    this.updateCart(cart);
  }

  private updateCart(cart: ICartItem[]): void {
    this.storageService.setCart(cart);
    const total = this.getTotalQuantity();
    this.itemsInCart.next(total);
  }

  getTotalAmount(): number {
    const cart = [...this.getCart()];
    let totalAmount = 0;
    cart.map(item => totalAmount += (item.quantity * item.unitPrice));
    return totalAmount;
  }
}
