import { Product } from './../../models/product.model';
import { ICategory } from '../../interfaces/category.interface';
import { PortalHttp } from '../../commons/http/portal.http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { IProductRequest } from '../../interfaces/product.interface';

@Injectable()
export class ProductListPresenter {

  products: Product[];
  // request: IProductRequest;

  constructor(private http: PortalHttp) {
    this.products = [];
  }

  getProductsByCategory(idCategory: string): void {
    this.http.getProductsByCategory(idCategory).subscribe(response => {
      this.products = response.map(item => new Product(item));
    }, error => console.log(error));
  }

  filter(): void {
    const request: IProductRequest = {
      name: 'alc',
      sku: '',
      category: '',
      price: null,
      maker: '',
      sort: ''
    }
    this.http.getProductsFilter(20,0, request).subscribe(response => {
      this.products = response.map(item => new Product(item));
    })
  }

  // setCategoryFilter(category: string) {
  //   this.request.category = cage
  // }

}
