import { IdsAuthenticationModule } from './../../../../../../libs/idstore-commons/src/lib/guards/authentication.module';
import { PaymentCommonsModule } from './commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CartView } from './views/cart/cart.view';
import { RouterModule } from '@angular/router';
import { PaymentRoutingModule } from './payment-routing.module';
import { OrderView } from './views/order/order.view';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PaymentComponent, CartView, OrderView],
  imports: [
    CommonModule,
    RouterModule,
    PaymentRoutingModule,
    PaymentCommonsModule,
    MatButtonModule,
    IdsAuthenticationModule
  ]
})
export class PaymentModule { }
