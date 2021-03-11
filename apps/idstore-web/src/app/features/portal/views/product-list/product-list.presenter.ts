import { Product } from './../../models/product.model';
import { ICategory } from '../../interfaces/category.interface';
import { PortalHttp } from '../../commons/http/portal.http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';

@Injectable()
export class ProductListPresenter {

  products: Product[];

  constructor(private http: PortalHttp) {
    this.products = [];
  }

  getProductsByCategory(idCategory: string): void {
    this.http.getProductsByCategory(idCategory).subscribe(response => {
      this.products = response.map(item => new Product(item));
    }, error => console.log(error));
  }
}
