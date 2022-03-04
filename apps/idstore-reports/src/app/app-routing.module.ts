import { ProductCategoryPage } from './pages/product-category/product-category.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPage } from './pages/todo/todo.page';

const routes: Routes = [
  { path: '', redirectTo: 'product-category', pathMatch: 'full' },
  { path: 'todo', component: TodoPage },
  { path: 'product-category', component: ProductCategoryPage },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
