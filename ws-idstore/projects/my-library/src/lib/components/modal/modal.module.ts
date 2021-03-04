import { MlModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MlModalComponent],
  exports: [MlModalComponent],
  imports: [
    CommonModule
  ]
})
export class MlModalModule { }
