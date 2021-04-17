import { Component, OnInit } from '@angular/core';
import { ProductDetailPresenter } from './product-detail.presenter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.view.html',
  styleUrls: ['./product-detail.view.scss'],
  providers: [ProductDetailPresenter]
})
export class ProductDetailView implements OnInit {

  id: string;

  constructor(
    public presenter: ProductDetailPresenter,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getProduct(this.id);
  }

  goToEdit(): void {
    this.router.navigateByUrl(`/admin/product-update/${this.presenter.product.id}`);
  }

  goToTable(): void {
    this.router.navigateByUrl('/admin/products');
  }

}
