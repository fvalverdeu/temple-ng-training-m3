import { PortalComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalHttpModule } from './http/http.module';



@NgModule({
  exports: [
    CommonModule,
    PortalComponentsModule,
    PortalHttpModule
  ]
})
export class PortalCommonsModule { }
