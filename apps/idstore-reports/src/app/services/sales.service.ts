import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '@idstore/commons/interfaces/product.interface';
import { environment } from 'apps/idstore-reports/src/environments/environment';
import { IOrder } from '@idstore/commons/interfaces/sales.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(environment.apiSales + '/api/order');
  }
}
