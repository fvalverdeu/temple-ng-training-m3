import { AdminHttp } from '../../commons/http/admin.http';
import { ProductConfirmComponent } from '../../commons/components/product-confirm/product-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { Maker } from '../../models/maker.model';
import { IMaker, IMakerRequest } from '@idstore/commons/interfaces/maker.interface';
import { IdsMakerHttp } from '@idstore/commons/http/maker/maker.http';

@Injectable()
export class MakersPresenter {

  makers: Maker[] = [];
  request: IMakerRequest;
  limit: number = 100;
  skip: number = 0;
  length: number = 18;
  pageSize: number = 20;
  constructor(
    private idsHttp: IdsMakerHttp,
    private dialog: MatDialog,
    private adminHttp: AdminHttp
  ) {
    this.request = {
      name: '',
      document: '',
      status: ''
    };
  }

  getMakerFilter(): void {
    this.idsHttp.getMakersFilter(this.limit, this.skip, this.request).subscribe(response => {
      this.makers = response.map(item => new Maker(item));
    }, error => console.log(error));
  }

  filter(filter: IMakerRequest): void {
    this.request.name = filter.name;
    this.request.document = filter.document;
    this.request.status = filter.status;
    this.getMakerFilter();
  }

  getMakers(): void {
    this.adminHttp.getMakers().subscribe(response => {
      this.makers = response.map(item => new Maker(item));
    })
  }

  confirm(id: string): void {
    if(id) {
      const modal = this.dialog.open(ProductConfirmComponent, {
        disableClose: false
      });
      modal.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (!result) {
          this.adminHttp.deleteMaker(id).subscribe(response => {
            console.log('Categoría eliminada');
          });
        }
      });
    }
  }
}
