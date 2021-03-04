import { MlModalModule } from './../../../my-library/src/lib/components/modal/modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MlModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
