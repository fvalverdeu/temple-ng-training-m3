import { IdsCartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdsSessionService } from '@idstore/commons/services/session/session.service';

@Component({
  selector: 'ids-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class IdsHeaderComponent implements OnInit {

  isAuth: boolean = false;
  badge: number;

  constructor(
    private router: Router,
    private sessionService: IdsSessionService,
    private cartService: IdsCartService
  ) {
    this.isAuth = this.sessionService.isAuthenticated;
  }

  ngOnInit(): void {
    this.badge = this.cartService.getTotalQuantity();
    this.cartService.itemsInCart.subscribe(response => {
      this.badge = response;
    });
  }

  signIn(): void {
    this.router.navigateByUrl('/auth');
  }

  signOut(): void {
    this.sessionService.logout();
    this.router.navigateByUrl('/portal');
  }

}
