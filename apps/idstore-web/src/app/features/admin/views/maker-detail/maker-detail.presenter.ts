import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { Maker } from '../../models/maker.model';

@Injectable()
export class MakerDetailPresenter {

  subscription: Subscription;
  maker: Maker = new Maker();

  constructor(
    private http: AdminHttp,
  ) {
    this.subscription = new Subscription();
  }

  getMaker(id: string): void {
    this.http.getMakerById(id).subscribe(response => {
      this.maker = new Maker(response);
    }, error => console.log(error));
  }
}
