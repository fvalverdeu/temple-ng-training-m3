import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoaderComponent } from './loader.component';



@NgModule({
  declarations: [UiLoaderComponent],
  exports: [UiLoaderComponent],
  imports: [
    CommonModule
  ]
})
export class UiLoaderModule { }
