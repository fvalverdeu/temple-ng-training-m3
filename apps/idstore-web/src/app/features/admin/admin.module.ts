import { IdsProductHttpModule } from './../../../../../../libs/idstore-commons/src/lib/http/product/product.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { IdsLayoutModule } from '@idstore/commons/components/layout/layout.module';
import { ProductsView } from './views/products/products.view';
import { IdsMenuModule } from '@idstore/commons/components/menu/menu.module';
import { AdminCommonsModule } from './commons/commons.module';



@NgModule({
  declarations: [AdminComponent, ProductsView],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    IdsLayoutModule,
    IdsMenuModule,
    IdsProductHttpModule
  ]
})
export class AdminModule { }
