import { IdsCartService } from './../../../../libs/idstore-commons/src/lib/services/cart/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idstore-web';

  constructor(private cartService: IdsCartService) {
    cartService.createCart();
  }
}
