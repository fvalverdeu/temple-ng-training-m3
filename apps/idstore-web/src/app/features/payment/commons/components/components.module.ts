import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { IdsCurrencyModule } from '@idstore/commons/pipes/currency/currency.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderAmountComponent } from './order-amount/order-amount.component';
import { MatOptionModule } from '@angular/material/core';

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const MATERIAL_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatTableModule
];

const LIBRARY_MODULES = [
  IdsCurrencyModule
];

const COMPONENTS = [
  CartItemComponent,
  CartTotalComponent,
  OrderDetailComponent,
  OrderAmountComponent
];

@NgModule({
  declarations: [...COMPONENTS ],
  exports: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...LIBRARY_MODULES
  ]
})
export class PaymentComponentsModule { }
