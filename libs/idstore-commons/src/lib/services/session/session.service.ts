import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from '@idstore/commons/interfaces/user.interface';
import { IdsStorageService } from '../storage/storage.service';
import { IdsSessionModule } from './session.module';

@Injectable({
  providedIn: IdsSessionModule
})
export class IdsSessionService {

  private helper = new JwtHelperService();

  constructor(
    private storageService: IdsStorageService
  ) { }

  get token(): string {
    return this.storageService.getSignInToken();
  }

  set token(value: string) {
    this.storageService.setSignInToken(value);
  }

  get user(): IUser | null {
    let tokenInfo = '';
    if (this.token.length > 0) {
      tokenInfo = this.helper.decodeToken(this.token);
      return JSON.parse(tokenInfo);
    }
    return null;
  }

  get isAuthenticated(): boolean {
    if (this.token && this.user) {
      return !this.helper.isTokenExpired(this.token);
    }
    return false;
  }

  logout(): void {
    this.storageService.clearAll();
  }

}
