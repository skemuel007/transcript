import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpOptions} from '../utils/http_options';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = environment.APIEndpoint;
  private  paymentUri = `${this.apiUrl}/user/payment`;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    mat_no: new FormControl(''),
    apptype: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl(''),
    paymenttype: new FormControl(''),
    txRef: new FormControl(''),
    dest: new FormControl(''),
    orderStatus: new FormControl(''),
    date: new FormControl('')
  })

  constructor(private http: HttpClient) { }

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      name: '',
      mat_no: '',
      apptype: '',
      amount: '',
      status: '',
      paymenttype: '',
      txRef: '',
      dest: '',
      orderStatus: '',
      date: ''
    });
  }

  populateForm(paymentData) {
    this.form.setValue(paymentData);
  }

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
