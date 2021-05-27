import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailPresenter } from './product-detail.presenter';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.view.html',
  styleUrls: ['./product-detail.view.scss'],
  providers: [ProductDetailPresenter]
})
export class ProductDetailView implements OnInit, AfterViewInit {

  @ViewChild('quantity') inputQuantity: ElementRef;
  id: string;
  quantity: number;

  constructor(
    private activatedRouter: ActivatedRoute,
    public presenter: ProductDetailPresenter,
    private router: Router
  ) {
    this.id = activatedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.presenter.getProduct(this.id);
  }

  ngAfterViewInit(): void {

  }

  addToCart(): void {
    this.quantity = this.inputQuantity.nativeElement.value;
    console.log('inputQuantity', this.inputQuantity.nativeElement);
    if (this.quantity)
      this.presenter.addToCart(this.presenter.product, this.quantity);
    else this.presenter.addToCart(this.presenter.product);
    // this.router.navigateByUrl('');
  }

  goToOrder(): void {
    this.router.navigateByUrl('');
  }

}
