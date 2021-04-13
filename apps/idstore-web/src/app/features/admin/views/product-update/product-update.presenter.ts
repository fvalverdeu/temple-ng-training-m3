import { IProductFormData } from './../../interfaces/product-form-data.interface';
import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductUpdatePresenter {

  categories: ICategory[];
  makers: IMaker[];
  subscription: Subscription;
  product: Product = new Product();

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

  getProduct(id: string): void {
    this.http.getProductById(id).subscribe(response => {
      this.product = new Product(response);
    }, error => console.log(error));
  }

  update(id: string, data: IProductFormData): void {
    console.log('update', data);
    this.http.updateProduct(id, data).subscribe(response => {
      console.log('producto actualizado', response);
    })
  }
}
