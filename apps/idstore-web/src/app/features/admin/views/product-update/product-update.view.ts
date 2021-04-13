import { ProductUpdatePresenter } from './product-update.presenter';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProductFormData } from '../../interfaces/product-form-data.interface';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.view.html',
  styleUrls: ['./product-update.view.scss'],
  providers: [ProductUpdatePresenter]
})
export class ProductUpdateView implements OnInit {

  id: string;
  constructor(
    public presenter: ProductUpdatePresenter,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getMainCategories();
    this.presenter.getMakers();
    this.presenter.getProduct(this.id);
  }

  update(data: IProductFormData): void {
    this.presenter.update(this.id, data);
  }

}
