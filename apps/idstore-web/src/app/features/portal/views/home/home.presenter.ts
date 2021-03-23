import { ICategory } from './../../interfaces/category.interface';
import { PortalHttp } from './../../commons/http/portal.http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { MatDialog } from '@angular/material/dialog';
import { UiLoaderComponent } from 'libs/idstore-components/src/lib/components/atomic/loader/loader.component';

@Injectable()
export class HomePresenter {

  categories: Category[];

  constructor(
    private http: PortalHttp,
    private dialog: MatDialog
  ) {
    this.categories = [];
  }

  getMainCategories(): void {
    const loading = this.dialog.open(UiLoaderComponent, {
      disableClose: true
    });
    this.http.getMainCategories().subscribe(response => {
      this.categories = response.map(item => new Category(item));
      loading.close(true);
    }, error => console.log(error));
  }
}
