import { ECartIgv } from '@idstore/commons/constants/cart.constans';
import { CartItem } from './cart.model';
export class PaypalPurchaseUnits {
  reference_id: string;
  description: string;
  amount: PaypalAmount;
  items: PaypalItem[];

  constructor(data: CartItem[]) {
    const id = Math.floor(Math.random()*10000 + 10000);
    const idFormat = String(id).padStart(4, '0')
    this.reference_id = 'id-store_' + idFormat;
    this.description = `Id-Store: Pedido Nro. ${idFormat} (${data.length} productos).`;
    this.amount = new PaypalAmount(data);
    this.items = data.map(item => new PaypalItem(item));
  }
}

export class PaypalAmount {
  currency_code: string;
  value: number;
  breakdown: {
    item_total: {
        currency_code: string,
        value: string
    }
}

  constructor(data: CartItem[]) {
    this.currency_code = 'USD';
    this.value = this.getValue(data);
    this.breakdown = {
      item_total: {
        currency_code: 'USD',
        value: this.getValue(data).toString()
      }
    }
  }

  getValue(data: CartItem[]): number {
    let total = 0;
    data.map(item => total += (item.quantity * item.unitPrice)*(1 + ECartIgv.IGV));
    return total;
  }
}

export class PaypalItem {
  name: string;
  // description: string;
  // sku: string;
  unit_amount: PaypalItemAmount;
  quantity: string;

  constructor(data: CartItem) {
    this.name = data.name;
    this.unit_amount = new PaypalItemAmount(data);
    this.quantity = (data.quantity * (1 + ECartIgv.IGV)).toString();
  }
}

export class PaypalItemAmount {
  currency_code: string;
  value: string;

  constructor(data: CartItem) {
    this.currency_code = 'USD';
    this.value = (data.unitPrice * (1 + ECartIgv.IGV)).toString();
  }
}
