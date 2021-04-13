import { IAction } from './../../interfaces/action.interface';
import { ProductsPresenter } from './products.presenter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EAction } from '../../interfaces/constants/action.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.view.html',
  styleUrls: ['./products.view.scss'],
  providers: [ProductsPresenter]
})
export class ProductsView implements OnInit {

  actionCreate: IAction = {name: EAction.CREATE, id: ''};
  constructor(
    public presenter: ProductsPresenter,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.presenter.getProductsFilter();
  }

  action(event: IAction): void {
    switch (event.name) {
      case EAction.FIND:
        this.router.navigateByUrl('/admin/product-detail');
        break;
      case EAction.UPDATE:
        this.router.navigateByUrl(`/admin/product-update/${event.id}`);
        break;
      case EAction.CREATE:
        this.router.navigateByUrl('/admin/product-create');
        break;
      default:
        break;
    }
  }

}
