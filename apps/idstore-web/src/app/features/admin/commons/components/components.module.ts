import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

const MATERIAL_MODULES = [
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatPaginatorModule
];

const LIBRARY_MODULES = [];

const COMPONENTS = [ProductTableComponent, ProductFilterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    // ...LIBRARY_MODULES
  ]
})

export class AdminComponentsModule { }
