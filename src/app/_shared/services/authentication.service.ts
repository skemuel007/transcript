import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

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
