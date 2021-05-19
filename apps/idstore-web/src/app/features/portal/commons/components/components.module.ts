import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';44

import { MatCardModule } from '@angular/material/card';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
];

const MATERIAL_MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
];

const LIBRARY_MODULES = [];

const COMPONENTS = [
  CategoryComponent,
  ProductComponent,
  ContactFormComponent
];

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
