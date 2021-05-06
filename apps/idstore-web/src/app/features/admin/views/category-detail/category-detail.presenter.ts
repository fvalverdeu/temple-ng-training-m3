import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoryDetailPresenter {

  subscription: Subscription;
  category: Category = new Category();

  constructor(
    private http: AdminHttp,
  ) {
    this.subscription = new Subscription();
  }

  getCategory(id: string): void {
    this.http.getCategoryById(id).subscribe(response => {
      this.category = new Category(response);
    }, error => console.log(error));
  }
}
