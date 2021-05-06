import { ERRORS_LIST } from './../../constants/category.constans';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class IdsErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('estoy en el interceptor', request);
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Estoy en un error del interceptor', error.message);
        if (error.status) {
          // console.log('La URL es incorrecta.')
          console.table(ERRORS_LIST.get(error.status));
        }
        return throwError(error);
      })
    )
  }
}
