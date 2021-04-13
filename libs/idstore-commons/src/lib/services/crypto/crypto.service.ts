import { environment } from './../../../../../../apps/idstore-web/src/environments/environment';
import { IdsCryptoModule } from './crypto.module';
import { Injectable } from '@angular/core';
// import { AES, enc } from 'crypto-js';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: IdsCryptoModule
})
export class IdsCryptoService {

  private key = environment.key;

  constructor() { }

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.key).toString();
  }

  decrypt(value: string): string {
    return value ? CryptoJS.AES.decrypt(value, this.key).toString(CryptoJS.enc.Utf8) : '';
  }

  // npm i --save-dev @types/crypto-js
}
