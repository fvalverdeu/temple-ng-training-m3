import { Injectable } from '@angular/core';
import { AdminHttp } from '../../commons/http/admin.http';
import { Subscription } from 'rxjs';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { Maker } from '../../models/maker.model';
import { IMakerFormData } from '../../interfaces/maker-form-data';

@Injectable()
export class MakerUpdatePresenter {

  subscription: Subscription;
  maker: Maker = new Maker();

  constructor(
    private http: AdminHttp,
    // private snackBar: MatSnackBar
  ) {
    this.subscription = new Subscription();
  }

  getMaker(id: string): void {
    this.http.getMakerById(id).subscribe(response => {
      this.maker = new Maker(response);
    }, error => console.log(error));
  }

  update(id: string, data: IMakerFormData): void {
    console.log('update', data);
    this.http.updateMaker(id, data).subscribe(response => {
      console.log('makero actualizado', response);
    })
  }
}
