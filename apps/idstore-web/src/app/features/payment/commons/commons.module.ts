import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponentsModule } from './components/components.module';



@NgModule({
  exports: [
    CommonModule,
    PaymentComponentsModule
  ]
})
export class PaymentCommonsModule { }
