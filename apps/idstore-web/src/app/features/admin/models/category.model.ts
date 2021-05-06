import { ICategory } from '@idstore/commons/interfaces/category.interface';

export class Category {
  id: string;
  title: string;
  parent: string;
  path: string;
  status: string;

  constructor(data?: ICategory) {
    this.id = data?._id ? data._id : '';
    this.title = data?.title ? data.title : '';
    this.parent = data?.parent ? data.parent : '';
    this.path = data?.path ? data.path : '';
    this.status = data?.status ? data.status : '';
  }
}
