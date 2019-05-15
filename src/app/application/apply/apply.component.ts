import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.sass']
})
export class ApplyComponent implements OnInit {

  applyFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  confirmPayment(response: object): void {
    console.log(response);
  }

  cancelPayment(): void {
    console.log('close');
  }

  generateReference(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

}
