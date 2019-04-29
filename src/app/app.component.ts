import {Component, OnInit} from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadingRouteConfig: boolean;

  // mat progress bar properties
  color = 'primary';
  mode = 'indeterminate';
  bufferValue = 75;
  value = 50;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if ( event instanceof RouteConfigLoadStart) {
         // set loading to true
        this.loadingRouteConfig = true;
      } else if ( event instanceof RouteConfigLoadEnd ) {
        this.loadingRouteConfig = false;
      }
    });
  }
}
