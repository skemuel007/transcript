import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpOptions} from '../utils/http_options';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = environment.APIEndpoint;
  private  paymentUri = `${this.apiUrl}/user/payment`;

  constructor(private http: HttpClient) { }

  makePayment(payData): Observable<any> {

    return this.http.post<any>(this.paymentUri, HttpOptions.getHttpOptions())
        .pipe(
            tap((result) => console.log(`Payment data added!`)),
            catchError(this.handleError)
        );
  }

  getPayments(): Observable<any> {
    return this.http.get(this.paymentUri, HttpOptions.getHttpOptions())
        .pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
  }

  private handleError(error: HttpErrorResponse) {
    if ( error.error instanceof ErrorEvent) {
      console.log('An error occured: ' + error.error.message);
    } else {
      console.log(`Backed return code ${error.status}, body was: ${error.error}`);
    }

    return throwError(`${error.error}`);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
