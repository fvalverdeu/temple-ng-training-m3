import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { IdsProductHttpModule } from './../../../../../../libs/idstore-commons/src/lib/http/product/product.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { IdsLayoutModule } from '@idstore/commons/components/layout/layout.module';
import { ProductsView } from './views/products/products.view';
import { IdsMenuModule } from '@idstore/commons/components/menu/menu.module';
import { AdminCommonsModule } from './commons/commons.module';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { ProductUpdateView } from './views/product-update/product-update.view';
import { MatButton } from '@angular/material/button';



@NgModule({
  declarations: [AdminComponent, ProductsView, ProductCreateView, ProductDetailView, ProductUpdateView],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    IdsLayoutModule,
    IdsMenuModule,
    IdsProductHttpModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class AdminModule { }
