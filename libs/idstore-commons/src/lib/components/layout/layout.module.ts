import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsLayoutComponent } from './layout.component';



@NgModule({
  declarations: [IdsLayoutComponent],
  exports: [IdsLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class IdsLayoutModule { }
