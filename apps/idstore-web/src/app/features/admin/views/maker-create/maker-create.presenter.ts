import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { IMakerFormData } from '../../interfaces/maker-form-data';

@Injectable()
export class MakerCreatePresenter {

  makers: IMaker[];
  subscription: Subscription

  constructor(
    private http: AdminHttp,
  ) {
    this.makers = [];
    this.subscription = new Subscription();
  }

  getMakers(): void {
    this.subscription = this.http.getMakers().subscribe(response => {
      this.makers = response;
      console.log(this.makers)
    }, error => console.log(error));
  }

  register(data: IMakerFormData): void {
    console.log('registro', data);
    const subscription3 = this.http.registerMaker(data).subscribe(response => {
      console.log(response._id);
    })
    this.subscription.add(subscription3);
  }

}
