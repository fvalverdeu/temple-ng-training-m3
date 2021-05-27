import { IdsCartService } from './../../../../../../../../libs/idstore-commons/src/lib/services/cart/cart.service';
import { IdsProductHttp } from './../../../../../../../../libs/idstore-commons/src/lib/http/product/product.http';
import { Product } from '../../../../../../../../libs/idstore-commons/src/lib/models/product.model';
import { PortalHttp } from '../../commons/http/portal.http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailPresenter {

  product: Product;

  constructor(
    private idsHttp: IdsProductHttp,
    private cartService: IdsCartService
  ) {}

  getProduct(id: string): void {
    this.idsHttp.getProductById(id).subscribe(response => {
      this.product = new Product(response);
    })
  }

  addToCart(product: Product, quantity?: number): void {
    const item = this.cartService.productToItem(product);
    this.cartService.increment(item, quantity);
  }

}
