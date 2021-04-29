import { ProductCreatePresenter } from './product-create.presenter';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.view.html',
  styleUrls: ['./product-create.view.scss'],
  providers: [ProductCreatePresenter]
})
export class ProductCreateView implements OnInit, OnDestroy {

  constructor(public presenter: ProductCreatePresenter) { }

  ngOnInit(): void {
    this.presenter.getMainCategories();
    this.presenter.getMakers();
  }

  ngOnDestroy(): void {
    this.presenter.subscription.unsubscribe();
  }

}
