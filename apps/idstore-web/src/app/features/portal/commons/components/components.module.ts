import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';44

import { MatCardModule } from '@angular/material/card';

const ANGULAR_MODULES = [CommonModule];

const MATERIAL_MODULES = [MatCardModule];

const LIBRARY_MODULES = [];

const COMPONENTS = [CategoryComponent, ProductComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    // ...LIBRARY_MODULES
  ]
})
export class PortalComponentsModule { }
