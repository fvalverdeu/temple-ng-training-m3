import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IscLoaderComponent } from './loader.component';



@NgModule({
  declarations: [IscLoaderComponent],
  exports: [IscLoaderComponent],
  imports: [
    CommonModule
  ]
})
export class IscLoaderModule { }
