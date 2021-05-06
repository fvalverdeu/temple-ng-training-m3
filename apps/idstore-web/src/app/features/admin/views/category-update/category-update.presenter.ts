import { ICategoryFormData } from './../../interfaces/category-form-data.interface';
import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { Category } from '../../models/category.model';
import { CATEGORIES_LIST } from '@idstore/commons/constants/category.constans';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CategoryUpdatePresenter {

  categories: ICategory[];
  subscription: Subscription;
  category: Category = new Category();

  constructor(
    private http: AdminHttp,
    // private snackBar: MatSnackBar
  ) {
    this.categories = [];
    this.subscription = new Subscription();
  }

  getMainCategories(): void {
    this.subscription = this.http.getMainCategories().subscribe(response => {
      this.categories = response;
      console.log(this.categories)
    }, error => console.log(error));
  }

  getCategory(id: string): void {
    this.http.getCategoryById(id).subscribe(response => {
      this.category = new Category(response);
    }, error => console.log(error));
  }

  update(id: string, data: ICategoryFormData): void {
    console.log('update', data);
    this.http.updateCategory(id, data).subscribe(response => {
      console.log('categoryo actualizado', response);
    })
  }
}
