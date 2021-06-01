import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IdsSessionModule } from '@idstore/commons/services/session/session.module';



@NgModule({
  declarations: [UiLayoutComponent],
  exports: [UiLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    IdsSessionModule
  ]
})
export class UiLayoutModule { }
