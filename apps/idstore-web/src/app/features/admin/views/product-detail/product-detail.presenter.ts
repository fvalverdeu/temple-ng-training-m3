import { IProductFormData } from './../../interfaces/product-form-data.interface';
import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductDetailPresenter {

  subscription: Subscription;
  product: Product = new Product();

  constructor(
    private http: AdminHttp,
  ) {
    this.subscription = new Subscription();
  }

  getProduct(id: string): void {
    this.http.getProductById(id).subscribe(response => {
      this.product = new Product(response);
    }, error => console.log(error));
  }
}
