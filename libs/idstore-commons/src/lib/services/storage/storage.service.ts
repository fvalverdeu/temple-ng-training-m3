import { IdsCryptoService } from './../crypto/crypto.service';
import { IdsStorageModule } from './storage.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: IdsStorageModule
})
export class IdsStorageService {

  private keyToken = 'tokenLogin';

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

  clearAll(): void {
    localStorage.clear();
  }
}
