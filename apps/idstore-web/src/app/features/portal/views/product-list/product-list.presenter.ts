import { Maker } from './../../models/maker.model';
import { Category } from './../../models/category.model';
import { Product } from './../../models/product.model';
import { PortalHttp } from '../../commons/http/portal.http';
import { Injectable } from '@angular/core';
import { IProductRequest } from '../../interfaces/product.interface';

@Injectable()
export class ProductListPresenter {

  products: Product[];
  categories: Category[];
  makers: Maker[];
  request: IProductRequest;

  constructor(private http: PortalHttp) {
    this.products = [];
    this.categories = [];
    this.makers = [];
    this.request = {
      name: '',
      sku: '',
      category: '',
      price: null,
      maker: '',
      sort: ''
    }
  }

  getMainCategories(): void {
    this.http.getMainCategories().subscribe(response => {
      this.categories = response.map(item => new Category(item));
      console.log(this.categories)
    }, error => console.log(error));
  }

  getMakers(): void {
    this.http.getMakers().subscribe(response => {
      this.makers = response.map(item => new Maker(item));
      console.log(this.makers)
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
    this.http.getProductsFilter(20,0, this.request).subscribe(response => {
      this.products = response.map(item => new Product(item));
    })
  }

  setCategoryFilter(idCategory: string) {
    this.request.category = idCategory;
    this.filter();
  }

  setPriceFilter(option: number) {
    switch (option) {
      case 0:
        this.request.price = { minPrice: 0, maxPrice: 50 };
        break;
      case 1:
        this.request.price = { minPrice: 50, maxPrice: 200 };
        break;
      case 2:
        this.request.price = { minPrice: 200, maxPrice: 500 };
        break;
      case 2:
        this.request.price = { minPrice: 500, maxPrice: 5000 };
        break;
      default:
        this.request.price = { minPrice: 0, maxPrice: 5000 };
        break;
    }
    this.filter();
  }

  setMakerFilter(idMaker: string) {
    this.request.maker = idMaker;
    this.filter();
  }

}
