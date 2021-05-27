import { CartPresenter } from './cart.presenter';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ICartItem } from '@idstore/commons/interfaces/cart.interface';
import { CartItem } from '../../models/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.view.html',
  styleUrls: ['./cart.view.scss'],
  providers: [CartPresenter]
})
export class CartView implements OnInit {
  // @HostBinding('class.mat-elevation-z8')

  constructor(
    public presenter: CartPresenter,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.presenter.getCart();
  }

  payment(): void {
    this.router.navigateByUrl('payment/order');
  }

}
