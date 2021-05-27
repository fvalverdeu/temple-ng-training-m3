import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IdsSessionService } from '../services/session/session.service';
import { IdsAuthenticationModule } from './authentication.module';

@Injectable({
  providedIn: IdsAuthenticationModule
})
export class IdsAuthenticationGuard implements CanActivate {

  constructor(
    private sessionService: IdsSessionService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route);
      console.log(state);
      // return this.sessionService.isAuthenticated || this.router.navigateByUrl('/');
      if (!this.sessionService.isAuthenticated) {
        return state.url.includes('order') ? this.router.navigateByUrl('/auth') : this.router.navigateByUrl('/');
      }
      return true;
  }

}
