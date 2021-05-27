import { OrderPresenter } from './order.presenter';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaypalPurchaseUnits } from '../../models/paypal.model';

declare var paypal;

@Component({
  selector: 'app-order',
  templateUrl: './order.view.html',
  styleUrls: ['./order.view.scss'],
  providers: [OrderPresenter]
})
export class OrderView implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
  paypalOrder: PaypalPurchaseUnits;

  constructor(
    public presenter: OrderPresenter
  ) {
    this.presenter.getCart();
    this.paypalOrder = new PaypalPurchaseUnits(this.presenter.cart);
    console.log(this.paypalOrder);
  }

  ngOnInit(): void {

    paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            // reference_id: this.paypalOrder.reference_id,
            description: this.paypalOrder.description,
            amount: {
              currency_code: this.paypalOrder.amount.currency_code,
              value: this.paypalOrder.amount.value,
              // breakdown: {
              //   item_total: {
              //       currency_code: this.paypalOrder.amount.breakdown.item_total.currency_code,
              //       value: this.paypalOrder.amount.breakdown.item_total.value
              //   }
              // }
            },
            // items: [...this.paypalOrder.items]
          }]
          // purchase_units: [...this.paypalOrder]
        });
      },
      onApprove: async(data, actions) => {
        // This function captures the funds from the transaction.
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    })
    .render(this.paypalElement.nativeElement);
  }

}
