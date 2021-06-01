import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPage } from './pages/todo/todo.page';

const routes: Routes = [
  { path: 'todo', component: TodoPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
