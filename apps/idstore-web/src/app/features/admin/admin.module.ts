import { IdsMakerHttpModule } from './../../../../../../libs/idstore-commons/src/lib/http/maker/maker.module';
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
import { CategoriesView } from './views/categories/categories.view';
import { CategoryCreateView } from './views/category-create/category-create.view';
import { CategoryUpdateView } from './views/category-update/category-update.view';
import { CategoryDetailView } from './views/category-detail/category-detail.view';
import { IdsCategoryHttpModule } from '@idstore/commons/http/category/category.module';
import { IdsErrorModule } from '@idstore/commons/interceptors/error/error.module';
import { MakersView } from './views/makers/makers.view';
import { MakerCreateView } from './views/maker-create/maker-create.view';
import { MakerUpdateView } from './views/maker-update/maker-update.view';
import { MakerDetailView } from './views/maker-detail/maker-detail.view';



@NgModule({
  declarations: [AdminComponent, ProductsView, ProductCreateView, ProductDetailView, ProductUpdateView, CategoriesView, CategoryCreateView, CategoryUpdateView, CategoryDetailView, MakersView, MakerCreateView, MakerUpdateView, MakerDetailView],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    IdsLayoutModule,
    IdsMenuModule,
    IdsProductHttpModule,
    IdsCategoryHttpModule,
    IdsMakerHttpModule,
    MatCardModule,
    MatDialogModule,
    IdsErrorModule
  ]
})
export class AdminModule { }
