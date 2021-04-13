import { PortalHttpModule } from './http.module';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../../../../libs/idstore-commons/src/lib/interfaces/product.interface';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { ICategory } from '@idstore/commons/interfaces/category.interface';

@Injectable({
  providedIn: PortalHttpModule
})
export class PortalHttp {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  getMainCategories(): Observable<ICategory[]> {
    const URL = `${this.apiUrl}/category/main/list`;
    return this.http.get<ICategory[]>(URL);
  }

  getProductsByCategory(idCategory: string): Observable<IProduct[]> {
    const URL = `${this.apiUrl}/product/category/${idCategory}`;
    return this.http.get<IProduct[]>(URL);
  }

  getMakers(): Observable<IMaker[]> {
    const URL = `${this.apiUrl}/maker`;
    return this.http.get<IMaker[]>(URL);
  }
}
