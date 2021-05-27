import { environment } from '../../../../../apps/idstore-web/src/environments/environment';
import { IProduct } from '../interfaces/product.interface';
export class Product {
  pathImage:   string;
  _id:         string;
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
  images: string[];

  get expDate(): Date {
    return new Date(this.expiration);
  }

  constructor(data?: IProduct) {
    this.pathImage = data?.images ? this.getUrlImage(data.images[0]) : '';
    this._id = data?._id ? data._id : '';
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
    this.images = data?.images ? data.images : [];
  }

  getUrlImage(pathImg: string): string {
    return `${environment.api}/${pathImg}`
  }
}
