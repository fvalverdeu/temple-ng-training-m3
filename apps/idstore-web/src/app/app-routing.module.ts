import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
const routes: Routes = [];
=======
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'portal',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  }
];
>>>>>>> 5bb3d3b829a731f26bfb8e88082c853d2f7c8575

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
