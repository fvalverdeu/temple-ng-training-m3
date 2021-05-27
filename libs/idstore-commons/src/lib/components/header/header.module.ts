import { IdsCartModule } from './../../services/cart/cart.module';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatBadgeModule } from '@angular/material/badge'
import { IdsSessionModule } from '@idstore/commons/services/session/session.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsHeaderComponent } from './header.component';


@NgModule({
  declarations: [IdsHeaderComponent],
  exports: [IdsHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatBadgeModule,
    RouterModule,
    IdsSessionModule,
    IdsCartModule
  ]
})
export class IdsHeaderModule { }
