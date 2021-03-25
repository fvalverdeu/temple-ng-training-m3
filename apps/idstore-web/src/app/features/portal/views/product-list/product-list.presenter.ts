import { Product } from './../../models/product.model';
import { ICategory } from '../../interfaces/category.interface';
import { PortalHttp } from '../../commons/http/portal.http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { IProductRequest } from '../../interfaces/product.interface';

@Injectable()
export class ProductListPresenter {

  products: Product[];
  categories: Category[];
  // request: IProductRequest;

  constructor(private http: PortalHttp) {
    this.products = [];
    this.categories = [];
  }

  getMainCategories(): void {
    this.http.getMainCategories().subscribe(response => {
      this.categories = response.map(item => new Category(item));
    }, error => console.log(error));
  }

  getProductsByCategory(idCategory: string): void {
    if (idCategory === '0') {
      this.filter();
    } else {
      this.http.getProductsByCategory(idCategory).subscribe(response => {
        this.products = response.map(item => new Product(item));
        console.log(this.products)
      }, error => console.log(error));
    }
  }

  filter(): void {
    const request: IProductRequest = {
      name: '',
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
