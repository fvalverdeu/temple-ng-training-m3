import { IMaker, IMakerRequest } from './../../interfaces/maker.interface';
import { environment } from './../../../../../../apps/idstore-web/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IdsMakerHttpModule } from './maker.module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: IdsMakerHttpModule
})
export class IdsMakerHttp {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  getMakersFilter(limit: number, skip: number, request: IMakerRequest): Observable<IMaker[]> {
    const URL = `${this.apiUrl}/maker/page/${limit}/${skip}`;
    return this.http.post<IMaker[]>(URL, request);
  }
}
