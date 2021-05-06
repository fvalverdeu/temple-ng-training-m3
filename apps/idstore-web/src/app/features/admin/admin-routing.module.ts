import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesView } from './views/categories/categories.view';
import { CategoryCreateView } from './views/category-create/category-create.view';
import { CategoryDetailView } from './views/category-detail/category-detail.view';
import { CategoryUpdateView } from './views/category-update/category-update.view';
import { MakerCreateView } from './views/maker-create/maker-create.view';
import { MakerDetailView } from './views/maker-detail/maker-detail.view';
import { MakerUpdateView } from './views/maker-update/maker-update.view';
import { MakersView } from './views/makers/makers.view';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { ProductUpdateView } from './views/product-update/product-update.view';
import { ProductsView } from './views/products/products.view';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'products', component: ProductsView },
      { path: 'product-create', component: ProductCreateView },
      { path: 'product-update/:id', component: ProductUpdateView },
      { path: 'product-detail/:id', component: ProductDetailView },
      { path: 'categories', component: CategoriesView },
      { path: 'category-create', component: CategoryCreateView },
      { path: 'category-update/:id', component: CategoryUpdateView },
      { path: 'category-detail/:id', component: CategoryDetailView },
      { path: 'makers', component: MakersView },
      { path: 'maker-create', component: MakerCreateView },
      { path: 'maker-update/:id', component: MakerUpdateView },
      { path: 'maker-detail/:id', component: MakerDetailView },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
