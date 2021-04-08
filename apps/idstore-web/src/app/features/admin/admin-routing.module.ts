import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
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
      { path: 'product-update', component: ProductUpdateView },
      { path: 'product-detail', component: ProductDetailView },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
