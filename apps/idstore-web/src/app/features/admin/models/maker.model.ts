import { IMaker } from '@idstore/commons/interfaces/maker.interface';

export class Maker {
  id:      string;
  name:     string;
  document: string;
  status: string;

  constructor(data?: IMaker) {
    this.id = data?._id ? data._id : '';
    this.name = data?.name ? data.name : '';
    this.document = data?.document ? data.document : '';
    this.status = data?.status ? data.status : '';
  }
}
