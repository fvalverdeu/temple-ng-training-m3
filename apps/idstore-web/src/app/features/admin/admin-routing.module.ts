import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsView } from './views/products/products.view';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'products', component: ProductsView },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
