import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInView } from './views/sign-in/sign-in.view';
import { IdsLayoutModule } from '@idstore/commons/components/layout/layout.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthCommonsModule } from './commons/commons.module';



@NgModule({
  declarations: [AuthComponent, SignInView],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonsModule,
    IdsLayoutModule
  ]
})
export class AuthModule { }
