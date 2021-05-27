import { Injectable } from '@angular/core';
import { ICartItem } from '@idstore/commons/interfaces/cart.interface';
import { IdsCryptoService } from './../crypto/crypto.service';
import { IdsStorageModule } from './storage.module';

@Injectable({
  providedIn: IdsStorageModule
})
export class IdsStorageService {

  private keyToken = 'tokenLogin';
  private keyCart = 'cart';

  constructor(
    private cryptoService: IdsCryptoService
  ) { }

  setSignInToken(token: string): void {
    const encripted = this.cryptoService.encrypt(token);
    localStorage.setItem(this.keyToken, encripted);
  }

  getSignInToken(): string {
    const encripted = localStorage.getItem(this.keyToken);
    let decripted = '';
    if (encripted) {
      decripted = this.cryptoService.decrypt(encripted);
    }
    return decripted;
  }

  setCart(array: ICartItem[]): void {
    localStorage.setItem(this.keyCart, JSON.stringify(array));
  }

  getCart(): ICartItem[] {
    return JSON.parse(localStorage.getItem(this.keyCart));
  }

  clearAll(): void {
    localStorage.clear();
  }
}
