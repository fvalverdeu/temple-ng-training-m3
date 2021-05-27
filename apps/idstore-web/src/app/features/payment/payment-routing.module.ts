import { IdsAuthenticationGuard } from './../../../../../../libs/idstore-commons/src/lib/guards/authentication.guard';
import { OrderView } from './views/order/order.view';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { CartView } from './views/cart/cart.view';


const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: '', component: PaymentComponent,
    children: [
      { path: 'cart', component: CartView },
      { canActivate: [IdsAuthenticationGuard], path: 'order', component: OrderView },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {

}
