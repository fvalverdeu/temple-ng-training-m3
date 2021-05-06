import { ICategoryFormData } from './../../interfaces/category-form-data.interface';
import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';

@Injectable()
export class CategoryCreatePresenter {

  categories: ICategory[];
  makers: IMaker[];
  subscription: Subscription

  constructor(
    private http: AdminHttp,
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

  register(data: ICategoryFormData): void {
    console.log('registro', data);
    const subscription3 = this.http.registerCategory(data).subscribe(response => {
      console.log(response._id);
    })
    this.subscription.add(subscription3);
  }

}
