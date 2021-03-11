import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { PortalHttpModule } from './http.module';

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
}
