import { environment } from './../../../../../../apps/idstore-web/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IdsProductHttpModule } from './product.module';
import { Injectable } from '@angular/core';
import { IProduct, IProductRequest } from '@idstore/commons/interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: IdsProductHttpModule
})
export class IdsProductHttp {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  getProductsFilter(limit: number, skip: number, request: IProductRequest): Observable<IProduct[]> {
    const URL = `${this.apiUrl}/product/page/${limit}/${skip}`;
    return this.http.post<IProduct[]>(URL, request);
  }
}
