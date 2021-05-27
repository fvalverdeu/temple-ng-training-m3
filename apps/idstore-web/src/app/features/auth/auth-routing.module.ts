import { SignUpView } from './views/sign-up/sign-up.view';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInView } from './views/sign-in/sign-in.view';


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '', component: AuthComponent,
    children: [
      { path: 'sign-in', component: SignInView },
      { path: 'sign-up', component: SignUpView },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
