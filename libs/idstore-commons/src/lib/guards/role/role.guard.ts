import { ERole } from './../../services/session/session.constant';
import { IdsRoleModule } from './role.module';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IdsSessionService } from '@idstore/commons/services/session/session.service';

@Injectable({
  providedIn: IdsRoleModule
})
export class IdsRoleGuard implements CanActivate {

  constructor(
    private sessionService: IdsSessionService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.sessionService.role === ERole.ADMIN) return true;
      else {
        // state.url.includes('/payment/cart') ? this.router.navigateByUrl('/payment/order') :
        //   this.router.navigateByUrl('/');
        this.router.navigateByUrl('/payment/order');
      }
    return true;
  }

}
