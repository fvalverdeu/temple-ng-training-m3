import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsUploadFileComponent } from './upload-file.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [IdsUploadFileComponent],
  exports: [IdsUploadFileComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class IdsUploadFileModule { }
