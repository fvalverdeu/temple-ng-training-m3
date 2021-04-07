import { ProductsPresenter } from './products.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.view.html',
  styleUrls: ['./products.view.scss'],
  providers: [ProductsPresenter]
})
export class ProductsView implements OnInit {

  constructor(public presenter: ProductsPresenter) { }

  ngOnInit(): void {
    this.presenter.getProductsFilter();
  }

}
