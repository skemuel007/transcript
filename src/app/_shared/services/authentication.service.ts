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

  createUser(result: any): any {
    const user = new User();
    user.type = result.user[0].type;
    user.name = result.user[0].name;
    user.phone = result.user[0].phone;
    user.category = result.user[0].category;
    user.matNo = result.user[0].mat_no;
    user.id = result.user[0].id;
    user.email = result.user[0].email;
    user.token =  result.token;
    return user;
  }

  login(loginCredentials): Observable<any> {
      return this.http.post(`${this.apiUrl}/user/signin`, JSON.stringify(loginCredentials),
        HttpOptions.getHttpOptions()).pipe(
            map( (result: any) => {
              if (result.token && result.token) {
                const user = this.createUser(result);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
              }
              return result;
            })
      );
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
