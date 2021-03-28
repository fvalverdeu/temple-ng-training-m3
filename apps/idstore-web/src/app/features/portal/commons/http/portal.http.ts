import { PortalHttpModule } from './http.module';
import { ICategory } from './../../interfaces/category.interface';
import { IMaker } from './../../interfaces/maker.interface';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductRequest } from '../../interfaces/product.interface';

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

  getProductsFilter(limit: number, skip: number, request: IProductRequest): Observable<IProduct[]> {
    const URL = `${this.apiUrl}/product/page/${limit}/${skip}`;
    return this.http.post<IProduct[]>(URL, request);
  }

  getMakers(): Observable<IMaker[]> {
    const URL = `${this.apiUrl}/maker`;
    return this.http.get<IMaker[]>(URL);
  }
}
