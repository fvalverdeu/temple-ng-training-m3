import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { ProductListView } from './views/product-list/product-list.view';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: PortalComponent,
    children: [
      { path: 'home', component: HomeView },
      { path: 'product/:id', component: ProductListView }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {

}
