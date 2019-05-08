import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public imageUrl;
  constructor() { }
  ngOnInit() {

    this.imageUrl = [
        '../../../assets/img/DSC_1080 - Copy.jpg',
        '../../../assets/img/DSC_0111.jpg',
        '../../../assets/img/Student.png'
    ];
  }


}
