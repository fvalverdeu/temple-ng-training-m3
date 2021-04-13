import { ProductCreatePresenter } from './product-create.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.view.html',
  styleUrls: ['./product-create.view.scss'],
  providers: [ProductCreatePresenter]
})
export class ProductCreateView implements OnInit {

  constructor(public presenter: ProductCreatePresenter) { }

  ngOnInit(): void {
    this.presenter.getMainCategories();
    this.presenter.getMakers();
  }

}
