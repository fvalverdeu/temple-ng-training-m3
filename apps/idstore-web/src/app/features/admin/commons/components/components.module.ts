import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

import { MatTableModule } from '@angular/material/table';

const ANGULAR_MODULES = [CommonModule];

const MATERIAL_MODULES = [
  MatTableModule
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
