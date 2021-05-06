import { environment } from './../../../../../../apps/idstore-web/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IdsCategoryHttpModule } from './category.module';
import { Injectable } from '@angular/core';
import { ICategory, ICategoryRequest } from '@idstore/commons/interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: IdsCategoryHttpModule
})
export class IdsCategoryHttp {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  getCategorysFilter(limit: number, skip: number, request: ICategoryRequest): Observable<ICategory[]> {
    const URL = `${this.apiUrl}/category/page/${limit}/${skip}`;
    return this.http.post<ICategory[]>(URL, request);
  }
}
