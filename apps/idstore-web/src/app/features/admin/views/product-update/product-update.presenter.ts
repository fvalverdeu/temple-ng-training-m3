import { IProductFormData } from './../../interfaces/product-form-data.interface';
import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { Product } from '../../models/product.model';
import { CATEGORIES_LIST } from '@idstore/commons/constants/category.constans';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ProductUpdatePresenter {

  categories: ICategory[];
  makers: IMaker[];
  subscription: Subscription;
  product: Product = new Product();

  constructor(
    private http: AdminHttp,
    // private snackBar: MatSnackBar
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

  uploadImage(file: File): void {
    console.log('upload in presenter', file);
    const category = CATEGORIES_LIST.get(this.product.category);
    this.http.updateImage(file, category, this.product.id)
    .subscribe(response => {
      console.log('imagen actualizada', response);
      // this.snackBar.open('Imagen actualizada', undefined, { duration: 2000 });
    }, error => console.log(error));
  }
}
