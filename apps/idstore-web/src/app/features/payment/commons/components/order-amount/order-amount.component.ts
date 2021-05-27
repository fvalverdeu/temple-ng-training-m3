import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { CartItem } from '../../../models/cart.model';

@Component({
  selector: 'app-order-amount',
  templateUrl: './order-amount.component.html',
  styleUrls: ['./order-amount.component.scss']
})
export class OrderAmountComponent implements OnInit, OnChanges {

  @Input() cart: CartItem[];
  displayedColumns: string[] = [];
  dataSource = [];

  constructor() {
    this.displayedColumns = ['position', 'product', 'subTotal'];
    this.dataSource = this.cart;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cart.currentValue){
      console.log(this.cart);
    }
  }



}
