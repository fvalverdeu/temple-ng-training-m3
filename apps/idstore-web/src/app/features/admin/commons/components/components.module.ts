import { MatIconModule } from '@angular/material/icon';
import { IdsUploadFileModule } from './../../../../../../../../libs/idstore-commons/src/lib/components/upload-file/upload-file.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductConfirmComponent } from './product-confirm/product-confirm.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductImageComponent } from './product-image/product-image.component';
import { IdsImgPreviewModule } from '@idstore/commons/components/img-preview/img-preview.module';

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

const MATERIAL_MODULES = [
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSelectModule,
  MatIconModule
];

const LIBRARY_MODULES = [
  IdsUploadFileModule,
  IdsImgPreviewModule
];

const COMPONENTS = [
  ProductTableComponent,
  ProductFilterComponent,
  ProductConfirmComponent,
  ProductFormComponent,
  ProductImageComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...LIBRARY_MODULES
  ]
})

export class AdminComponentsModule { }
