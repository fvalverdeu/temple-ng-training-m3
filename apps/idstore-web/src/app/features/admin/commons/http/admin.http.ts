import { AdminHttpModule } from './http.module';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMaker } from '@idstore/commons/interfaces/maker.interface';
import { ICategory } from '@idstore/commons/interfaces/category.interface';
import { IProduct } from '@idstore/commons/interfaces/product.interface';
import { IProductFormData } from '../../interfaces/product-form-data.interface';

@Injectable({
  providedIn: AdminHttpModule
})
export class AdminHttp {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  getMainCategories(): Observable<ICategory[]> {
    const URL = `${this.apiUrl}/category/main/list`;
    return this.http.get<ICategory[]>(URL);
  }

  getMakers(): Observable<IMaker[]> {
    const URL = `${this.apiUrl}/maker`;
    return this.http.get<IMaker[]>(URL);
  }

  registerProduct(request: IProductFormData): Observable<IProduct> {
    const URL = `${this.apiUrl}/product`;
    return this.http.post<IProduct>(URL, request);
  }

  updateProduct(id: string, request: IProductFormData): Observable<IProduct> {
    const URL = `${this.apiUrl}/product/${id}`;
    return this.http.put<IProduct>(URL, request);
  }

  getProductById(id: string): Observable<IProduct> {
    const URL = `${this.apiUrl}/product/${id}`;
    return this.http.get<IProduct>(URL);
  }

  deleteProduct(id: string): Observable<IProduct> {
    const URL = `${this.apiUrl}/product/${id}`;
    return this.http.delete<IProduct>(URL);
  }

  updateImage(fileUpload: File, category: string, id: string): Observable<any> {
    const URL = `${this.apiUrl}/product/${category}/${id}/image`;
    let formData = new FormData();
    formData.append('image', fileUpload);
    formData.append('position', '0');
    console.log('fileUpload', fileUpload);
    return this.http.put<any>(URL, formData);
  }
}
