import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalCommonsModule } from './commons/commons.module';
import { ProductListView } from './views/product-list/product-list.view';

import { MatDialogModule } from '@angular/material/dialog';
import { IscLoaderModule } from 'libs/idstore-components/src/lib/components/atomic/loader/loader.module';

@NgModule({
  declarations: [PortalComponent, HomeView, ProductListView],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
    MatDialogModule,
    IscLoaderModule
  ]
})
export class PortalModule { }
