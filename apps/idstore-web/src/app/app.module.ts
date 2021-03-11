import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IsFooterModule } from 'libs/idstore-commons/src/lib/components/footer/footer.module';
import { IsHeaderModule } from 'libs/idstore-commons/src/lib/components/header/header.module';

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
