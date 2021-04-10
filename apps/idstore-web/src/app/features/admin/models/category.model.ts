import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { environment } from './../../../../environments/environment';

// export class Category implements ICategory {
export class Category {
  id: string;
  title: string;

  constructor(data?: ICategory) {
    this.id = data?._id ? data._id : '';
    this.title = data?.title ? data.title : '';
  }
}
