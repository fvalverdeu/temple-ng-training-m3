import { ICartItem } from '@idstore/commons/interfaces/cart.interface';
import { environment } from '../../../../environments/environment';

export class CartItem {
  id: string;
  image: string;
  name: string;
  unitPrice: number;
  quantity: number;

  constructor(data?: ICartItem) {
    this.id = data?.id ? data.id : '';
    this.image = data?.image ? data.image : '';
    this.name = data?.name ? data.name : '';
    this.unitPrice = data?.unitPrice ? data.unitPrice : 0;
    this.quantity = data?.quantity ? data.quantity : 0;
  }

  getSubTotal(): number {
    return this.unitPrice * this.quantity;
  }

  getItem(): ICartItem {
    const item: ICartItem = {
      id: this.id,
      name: this.name,
      image: this.id,
      quantity: this.quantity,
      unitPrice: this.unitPrice
    }
    return item;
  }
}
