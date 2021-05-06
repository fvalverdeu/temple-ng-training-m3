import { AdminHttp } from '../../commons/http/admin.http';
import { ProductConfirmComponent } from '../../commons/components/product-confirm/product-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { ICategory, ICategoryRequest } from '@idstore/commons/interfaces/category.interface';
import { IdsCategoryHttp } from '@idstore/commons/http/category/category.http';

@Injectable()
export class CategoriesPresenter {

  categories: Category[] = [];
  request: ICategoryRequest;
  limit: number = 100;
  skip: number = 0;
  length: number = 18;
  pageSize: number = 20;
  constructor(
    private idsHttp: IdsCategoryHttp,
    private dialog: MatDialog,
    private adminHttp: AdminHttp
  ) {
    this.request = {
      title: '',
      parent: '',
      status: ''
    };
  }

  getCategoryFilter(): void {
    this.idsHttp.getCategorysFilter(this.limit, this.skip, this.request).subscribe(response => {
      this.categories = response.map(item => new Category(item));
    }, error => console.log(error));
  }

  filter(filter: ICategoryRequest): void {
    this.request.title = filter.title;
    this.request.parent = filter.parent;
    this.request.status = filter.status;
    this.getCategoryFilter();
  }

  getCategories(): void {
    this.adminHttp.getMainCategories().subscribe(response => {
      this.categories = response.map(item => new Category(item));
    })
  }

  confirm(id: string): void {
    if(id) {
      const modal = this.dialog.open(ProductConfirmComponent, {
        disableClose: false
      });
      modal.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (!result) {
          this.adminHttp.deleteCategory(id).subscribe(response => {
            console.log('Categoría eliminada');
          });
        }
      });
    }
  }
}
