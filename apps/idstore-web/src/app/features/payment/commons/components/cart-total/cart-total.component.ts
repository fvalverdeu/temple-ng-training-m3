import { ECartIgv } from './../../../../../../../../../libs/idstore-commons/src/lib/constants/cart.constans';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {

  @Input() subTotal: number = 0;
  // @HostBinding('mat-elevation-z8') class;
  // agregar estilos directamente al componente teniendo el nombre de la clase

  constructor() {}

  ngOnInit(): void {
  }

  withIgv(): number {
    return ECartIgv.IGV * this.subTotal;
  }

  total(): number {
    return this.subTotal + this.withIgv();
  }

}
