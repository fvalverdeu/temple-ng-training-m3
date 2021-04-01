import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { IdsLayoutModule } from '@idstore/commons/components/layout/layout.module';
import { ProductsView } from './views/products/products.view';
import { RouterModule } from '@angular/router';
import { IdsMenuModule } from '@idstore/commons/components/menu/menu.module';



@NgModule({
  declarations: [AdminComponent, ProductsView],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IdsLayoutModule,
    IdsMenuModule
  ]
})
export class AdminModule { }
