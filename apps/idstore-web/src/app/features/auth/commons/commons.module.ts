import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentsModule } from './components/components.module';
import { AuthHttpModule } from './http/http.module';



@NgModule({
  exports: [
    CommonModule,
    AuthComponentsModule,
    AuthHttpModule
  ]
})
export class AuthCommonsModule { }
