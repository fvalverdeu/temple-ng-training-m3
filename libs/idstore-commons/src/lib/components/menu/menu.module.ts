import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsMenuComponent } from './menu.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IdsMenuComponent],
  exports: [IdsMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterModule
  ]
})
export class IdsMenuModule { }
