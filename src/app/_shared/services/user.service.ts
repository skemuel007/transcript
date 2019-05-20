import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {HttpOptions} from '../utils/http_options';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.APIEndpoint;
  private userApiUrl = `${this.apiUrl}/user/edit`;
  constructor(private http: HttpClient) { }

  updateUserProfile(id, profileData): Observable<any> {

    return this.http.patch(`${this.userApiUrl}/${id}`, JSON.stringify(profileData),
        HttpOptions.getHttpOptions())
        .pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
  }

  private handleError(error: HttpErrorResponse) {
    if ( error.error instanceof  ErrorEvent) {
      console.error('An error occured: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(`${error.error}`);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

}
