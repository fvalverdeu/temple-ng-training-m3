import { NgModule } from '@angular/core';
import { IdstoreComponentsComponent } from './idstore-components.component';
import { MenuComponent } from './components/molecules/menu/menu.component';



@NgModule({
  declarations: [IdstoreComponentsComponent, MenuComponent],
  imports: [
  ],
  exports: [IdstoreComponentsComponent]
})
export class IdstoreComponentsModule { }
