import { CategoryCreatePresenter } from './category-create.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.view.html',
  styleUrls: ['./category-create.view.scss'],
  providers: [CategoryCreatePresenter]
})
export class CategoryCreateView implements OnInit {

  constructor(public presenter: CategoryCreatePresenter) { }

  ngOnInit(): void {
    this.presenter.getMainCategories();
  }

  ngOnDestroy(): void {
    this.presenter.subscription.unsubscribe();
  }

}
