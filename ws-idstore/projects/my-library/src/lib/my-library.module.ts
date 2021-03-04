import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [MyLibraryComponent, ModalComponent],
  imports: [
  ],
  exports: [MyLibraryComponent]
})
export class MyLibraryModule { }
