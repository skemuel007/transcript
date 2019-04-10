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

  /**
   * get the current user subject value mapping into a user object
   */
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * Create User method to map token with user details as one object
   * @param result
   */
  createUser(result: any): any {
    const user = new User();
    user.type = result.user.type;
    user.name = result.user.name;
    user.phone = result.user.phone;
    user.category = result.user.category;
    user.matNo = result.user.mat_no;
    user.id = result.user.id;
    user.email = result.user.email;
    user.token =  result.token;
    return user;
  }

  /**
   * Login service method
   * @param loginCredentials
   */
  login(loginCredentials): Observable<any> {
      return this.http.post(`${this.apiUrl}/user/signin`, JSON.stringify(loginCredentials),
        HttpOptions.getHttpOptions()).pipe(
            map( (result: any) => {
              console.log(result);
              if (result.token && result.user) {
                const user = this.createUser(result);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
              }
              return result;
            })
      );
  }

  /**
   * Checks if user is looged in
   */
  isLoggedIn(): boolean {
    if ( this.currentUserValue != null) {
      return true;
    }
    return false;
  }

  /**
   * Logout method
   */
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  /**
   * Register auth service method
   * @param regDetails
   */
  register(regDetails): any {
    return this.http.post<any>(
        `${this.apiUrl}/user`, JSON.stringify(regDetails),
        HttpOptions.getHttpOptions()).pipe(
        map( (result: any) => {
          return result;
        })
    );
  }
}
