import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInView } from './views/sign-in/sign-in.view';
import { IdsLayoutModule } from '@idstore/commons/components/layout/layout.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthCommonsModule } from './commons/commons.module';
import { IdsSessionModule } from '@idstore/commons/services/session/session.module';
import { SignUpView } from './views/sign-up/sign-up.view';



@NgModule({
  declarations: [AuthComponent, SignInView, SignUpView],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonsModule,
    IdsLayoutModule,
    IdsSessionModule
  ]
})
export class AuthModule { }
