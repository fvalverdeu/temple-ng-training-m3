import { IdsRoleModule } from './../../../../libs/idstore-commons/src/lib/guards/role/role.module';
import { IdsCartModule } from './../../../../libs/idstore-commons/src/lib/services/cart/cart.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IdsFooterModule } from '@idstore/commons/components/footer/footer.module';
import { IdsHeaderModule } from '@idstore/commons/components/header/header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IdsAuthenticationModule } from '@idstore/commons/guards/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdsHeaderModule,
    IdsFooterModule,
    BrowserAnimationsModule,
    IdsAuthenticationModule,
    IdsCartModule,
    IdsRoleModule
    // MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
