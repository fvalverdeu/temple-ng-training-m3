import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IsFooterModule } from '@idstore/commons/components/footer/footer.module';
import { IsHeaderModule } from '@idstore/commons/components/header/header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IsHeaderModule,
    IsFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
