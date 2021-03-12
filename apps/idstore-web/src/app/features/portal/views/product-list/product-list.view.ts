import { ProductListPresenter } from './product-list.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.scss'],
  providers: [ProductListPresenter]
})
export class ProductListView implements OnInit {

  constructor(public presenter: ProductListPresenter) { }

  ngOnInit(): void {
    this.presenter.getProductsByCategory('5fefc649917abb4698b74585');
  }

}
