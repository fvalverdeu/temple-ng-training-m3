import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsHeaderComponent } from './header.component';

@NgModule({
  declarations: [IsHeaderComponent],
  exports: [IsHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class IsHeaderModule { }
