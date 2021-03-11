import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  imports: [
    CommonModule
  ]
})
export class PortalComponentsModule { }
