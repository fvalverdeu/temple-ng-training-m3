import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsImgPreviewComponent } from './img-preview.component';



@NgModule({
  declarations: [IdsImgPreviewComponent],
  exports: [IdsImgPreviewComponent],
  imports: [
    CommonModule
  ]
})
export class IdsImgPreviewModule { }
