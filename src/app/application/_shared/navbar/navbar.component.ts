import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../_shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private userName: string;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.userName = this.auth.currentUserValue.name;
  }

}
