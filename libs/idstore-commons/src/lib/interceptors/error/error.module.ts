import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IdsErrorInterceptor } from './error.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IdsErrorInterceptor,
      multi: true
    }
  ]
})
export class IdsErrorModule { }
