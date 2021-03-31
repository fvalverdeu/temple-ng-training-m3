import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalCommonsModule } from './commons/commons.module';
import { ProductListView } from './views/product-list/product-list.view';

import { MatDialogModule } from '@angular/material/dialog';
import { IdsLayoutModule } from '@idstore/commons/components/layout/layout.module';
import { UiLoaderModule } from '@idstore/ui/components/atomic/loader/loader.module';

@NgModule({
  declarations: [PortalComponent, HomeView, ProductListView],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
    MatDialogModule,
    UiLoaderModule,
    IdsLayoutModule,
    MatPaginatorModule
  ]
})
export class PortalModule { }
