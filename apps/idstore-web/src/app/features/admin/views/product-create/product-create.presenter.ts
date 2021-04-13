import { IProductFormData } from './../../interfaces/product-form-data.interface';
import { IFilterProduct } from './../../interfaces/filter.interface';
import { IdsProductHttp } from './../../../../../../../../libs/idstore-commons/src/lib/http/product/product.http';
import { Injectable } from '@angular/core';
import { Product } from '@idstore/commons/models/product.model';
import { IProductRequest } from '@idstore/commons/interfaces/product.interface';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';

@Injectable()
export class ProductCreatePresenter {

  categories: ICategory[];
  makers: IMaker[];
  subscription: Subscription

  constructor(
    private http: AdminHttp,
  ) {
    this.categories = [];
    this.makers = [];
    this.subscription = new Subscription();
  }

  getMainCategories(): void {
    this.subscription = this.http.getMainCategories().subscribe(response => {
      this.categories = response;
      console.log(this.categories)
    }, error => console.log(error));
  }

  getMakers(): void {
    this.http.getMakers().subscribe(response => {
      this.makers = response;
      console.log(this.makers)
    }, error => console.log(error));
  }

  register(data: IProductFormData): void {
    console.log('registro', data);
    this.http.registerProduct(data).subscribe(response => {
      console.log(response._id);
    })
  }

}
