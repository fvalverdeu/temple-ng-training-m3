import { IdsSessionModule } from './../../services/session/session.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { IdsLayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
// import { IdsMenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [IdsLayoutComponent],
  exports: [IdsLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    IdsSessionModule
    // IdsMenuModule
  ]
})
export class IdsLayoutModule { }
