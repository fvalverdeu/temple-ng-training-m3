import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsCurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [IdsCurrencyPipe],
  exports: [IdsCurrencyPipe],
  imports: [
    CommonModule
  ]
})
export class IdsCurrencyModule { }
