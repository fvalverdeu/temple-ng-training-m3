import { IdsCartService } from './../../../../../../../../../libs/idstore-commons/src/lib/services/cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@idstore/commons/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private cartService: IdsCartService,
    private router: Router
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    const item = this.cartService.productToItem(this.product);
    this.cartService.increment(item);
  }

  goToDetail(): void {
    this.router.navigateByUrl('/portal/product-detail/' + this.product._id);
  }

}
