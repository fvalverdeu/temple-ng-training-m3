import { ProductListPresenter } from './product-list.presenter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.scss'],
  providers: [ProductListPresenter]
})
export class ProductListView implements OnInit {

  constructor(
    public presenter: ProductListPresenter,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.presenter.getProductsByCategory(id);
  }

  filter(): void {
    this.presenter.filter();
  }

}
