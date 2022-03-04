export interface IOrder {
  id:              number;
  userId:          string;
  paymentType:     string;
  addressId:       number;
  orderDate:       Date;
  deliveryDate:    Date;
  amount:          number;
  transactionCode: string;
  tax:             number;
  state:           boolean;
  registerDate:    Date;
  registerUser:    string;
  updateDate:      Date;
  updateUser:      string;
}
