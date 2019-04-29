import {Component, OnInit} from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {LoadingBarService} from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private loader: LoadingBarService) {}

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if ( event instanceof RouteConfigLoadStart) {
         // set loading to true
        this.loader.start();
      } else if ( event instanceof RouteConfigLoadEnd ) {
        this.loader.complete();
        this.loader.stop();
      }
    });
  }
}
