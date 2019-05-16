import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../_shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private userName: string;
  constructor(private auth: AuthenticationService,
              private router: Router) {

  }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('currentUser')).name;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/pages/home']);
  }

}
