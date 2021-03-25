import { IMaker } from './../interfaces/maker.interface';
export class Maker {
  id:      string;
  name:     string;

  constructor(data?: IMaker) {
    this.id = data?._id ? data._id : '';
    this.name = data?.name ? data.name : '';
  }
}
