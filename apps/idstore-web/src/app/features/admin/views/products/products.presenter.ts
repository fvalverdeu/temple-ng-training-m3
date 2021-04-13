import { IFilterProduct } from './../../interfaces/filter.interface';
import { IdsProductHttp } from './../../../../../../../../libs/idstore-commons/src/lib/http/product/product.http';
import { Injectable } from '@angular/core';
import { Product } from '@idstore/commons/models/product.model';
import { IProductRequest } from '@idstore/commons/interfaces/product.interface';

@Injectable()
export class ProductsPresenter {

  products: Product[] = [];
  request: IProductRequest;
  limit: number = 100;
  skip: number = 0;
  length: number = 18;
  pageSize: number = 20;
  constructor(private idsHttp: IdsProductHttp) {
    this.request = {
      name: '',
      sku: '',
      category: '',
      price: null,
      maker: '',
      sort: ''
    };
  }

  getProductsFilter(): void {
    this.idsHttp.getProductsFilter(this.limit, this.skip, this.request).subscribe(response => {
      this.products = response.map(item => new Product(item));
    })
  }

  filter(filter: IFilterProduct): void {
    this.request.name = filter.name;
    this.request.sku = filter.sku;
    // this.request.state = filter.state;
    this.getProductsFilter();
  }
}
