import { IProduct } from '@idstore/commons/interfaces/product.interface';

export class Product {
  id:         string;
  sku:         string;
  name:        string;
  description: string;
  unit:        string;
  expiration:  string; // modificar a tipo Date
  model:       string;
  quantity:    string;
  price:       number;
  category:    string;
  maker:       string;
  status:      string;

  constructor(data?: IProduct) {
    this.id = data?._id ? data._id : '';
    this.sku = data?.sku ? data.sku : '';
    this.name = data?.name ? data.name : '';
    this.description = data?.description ? data.description : '';
    this.unit = data?.unit ? data.unit : '';
    this.expiration = data?.expiration ? data.expiration : '';
    this.model = data?.model ? data.model : '';
    this.quantity = data?.quantity ? data.quantity : '';
    this.price = data?.price ? data.price : 0;
    this.category = data?.category ? data.category : '';
    this.status = data?.status ? data.status : '';
    this.maker = data?.maker ? data.maker : '';
  }
}
