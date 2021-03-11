import { ICategory } from './../../interfaces/category.interface';
import { PortalHttp } from './../../commons/http/portal.http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';

@Injectable()
export class HomePresenter {

  categories: Category[];

  constructor(private http: PortalHttp) {
    this.categories = [];
  }

  getMainCategories(): void {
    this.http.getMainCategories().subscribe(response => {
      this.categories = response.map(item => new Category(item));
    }, error => console.log(error));
  }
}
