import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_shared/services/authentication.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    // check if the user is logged in  then log out
    if ( this.auth.currentUserValue !== null ) {
      this.auth.logout();
    }
  }

}
