import { ICartItem } from './../../../../../../../libs/idstore-commons/src/lib/interfaces/cart.interface';

export interface IOrder {
  idOrder: number;
  idPayment: string;
  date: Date;
  delivery: IOrderDetail;
  amount: IOrderAmount;
}

export interface IOrderDetail {
  documentType: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  addressType: string;
  address: string;
  reference: string;
  contactName: string;
  contactPhone: string;
  deliveryDate: string;
}

export interface IOrderAmount {
  cartItem: ICartItem;
}
