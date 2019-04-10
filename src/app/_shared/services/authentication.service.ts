import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {HttpOptions} from '../utils/http_options';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // get the api endpoint uri
  private apiUrl = environment.APIEndpoint;
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  /**
   * Authentication Service Constructor
   * @param http
   */
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  createUser(result) {
    const user = new User();
    // TODO: user parameters needed
    return user;
  }

  login(loginCredentials): Observable<any> {
      return this.http.post(`${this.apiUrl}/user/signin`, JSON.stringify(loginCredentials),
        HttpOptions.getHttpOptions()).pipe(
            map(result => {
              if (result.token && result.user) {
                const user = this.createUser(result);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
              }
              return result;
            })
      );
    // TODO: load user subject before set local storage item
      return null;
  }

  isLoggedIn(): boolean {
    if ( this.currentUserValue != null) {
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
