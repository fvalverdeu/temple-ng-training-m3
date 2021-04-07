import { ProductListPresenter } from './product-list.presenter';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.scss'],
  providers: [ProductListPresenter]
})
export class ProductListView implements OnInit, OnDestroy {

  showCategory: boolean;
  showPrice: boolean;
  showMaker: boolean;
  // pageEvent: PageEvent;

  constructor(
    public presenter: ProductListPresenter,
    private route: ActivatedRoute
  ) {
    this.showCategory = false;
    this.showPrice = false;
    this.showMaker = false;
    // this.pageEvent = {
    //   length: presenter.length,
    //   pageIndex: 1,
    //   pageSize: presenter.pageSize,
    //   previousPageIndex: undefined
    // };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id ? this.route.snapshot.params.id : '0';
    console.log('idroute products', id);
    this.presenter.getProductsByCategory(id);
    this.presenter.getMainCategories();
    this.presenter.getMakers();
  }

  filter(): void {
    this.presenter.filter();
  }

  clear(): void {
    this.presenter.request = {
      name: '',
      sku: '',
      category: '',
      price: null,
      maker: '',
      sort: ''
    }
    this.filter();
  }

  // changePage(event: PageEvent) {
  //   this.presenter.limit = event.pageSize;
  //   this.presenter.skip = (event.pageIndex * event.pageSize);
  //   this.filter();
  // }

  ngOnDestroy(): void {
    this.presenter.unSubscribeAll();
  }

}
