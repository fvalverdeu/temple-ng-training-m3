import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '@idstore/commons/interfaces/product.interface';
import { environment } from 'apps/idstore-reports/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductByCategory(idCategory: string): Observable<IProduct[]>{
    const request = {
      "name": "",
      "sku": "",
      "category": "",
      "maker": "",
      "sort": ""
    };
    request.category = idCategory;
    return this.http.post<IProduct[]>(environment.apiAdmin + '/product/page/20/0', request);
  }
}
