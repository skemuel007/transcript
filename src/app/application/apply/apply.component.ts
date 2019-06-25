import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CustomErrorStateMatcher} from '../../_shared/utils/custom-error-state-matcher';
import {AuthenticationService} from '../../_shared/services/authentication.service';
import {PaymentService} from '../../_shared/services/payment.service';
import { RaveOptions } from 'angular-rave';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  // add rave options
  /*paymentOptions: RaveOptions = {
    PBFPubKey: 'FLWPUBK-79d3f77bd5514789bc344b4a82f1a2d9-X',
    customer_email: this.auth.currentUserValue.email,
    customer_firstname: this.auth.currentUserValue.name.split(' ')[0],
    customer_lastname: this.auth.currentUserValue.name.split(' ')[1],
    custom_description: 'Payment for Transcript',
    amount: this.paymentFee(),
    customer_phone: this.auth.currentUserValue.phone,
    txref: this.generateReference(),
  }; */

  applyFormGroup: FormGroup;

  localeFormControl = new FormControl('', [
      Validators.required,
  ]);

  overSeasRegionFormControl = new FormControl('', [

  ]);

  localRegionFormControl = new FormControl('', [

  ]);

  addressFormControl = new FormControl('', [
      Validators.required,
  ]);

  transcriptFee = 10000.00;
  regionFee = 0.0;
  surcharge = 250;

  internationalRegionFee = {
    'West Africa' : {
      price: 16000.00
    },
    'Rest of Africa' : {
      price: 16000.00
    },
    'South Africa' : {
      price: 16000.00
    },
    EU : {
      price: 12000.00,
    },
    'United Kingdom' : {
      price: 12000.00
    },
    USA : {
      price: 12000.00
    },
    Canada : {
      price: 12000.00
    },
    'Middle East' : {
      price: 19000.00
    },
    Asia : {
      price: 21000.00
    },
    Australia : {
      price: 21000.00
    },
    'Latin America' : {
      price: 21000.00
    },
    'Rest of the World' : {
      price: 21000.00
    }
  };

  internationalRegion = ['Rest of the World', 'Latin America', 'Australia',
  'Asia', 'Middle East', 'United Kingdom', 'EU', 'South Africa', 'Rest of Africa', 'West Africa'];

  regions = ['International', 'Local'];

  localRegion = ['South-West', 'Others'];

  localRegionFee = {
    'South-West' : {
      price: 2600.00
    },
    Others : {
      price: 4600.00
    }
  };
  matcher = new CustomErrorStateMatcher();

  loading = false;
  hide = true;
  buttonText = 'Pay';
  outsideNigeria = false;
  withinNigeria = false;

  totalFee = 0.0;

  referenceKey = '';

  fullWidth = 'col-sm';
  halfWidth = 'col-sm-6';

  localeWidth: string;
  otherWidth: string;

  constructor(private router: Router, private toastr: ToastrService,
              private formBuilder: FormBuilder,
              public auth: AuthenticationService,
              private paymentService: PaymentService) {
    this.referenceKey = this.generateReference();
  }

  ngOnInit() {
    this.applyFormGroup =
        this.formBuilder.group({
          locale: this.localeFormControl,
          overSeasRegion: this.overSeasRegionFormControl,
          localRegion: this.localRegionFormControl,
          address: this.addressFormControl
        });
    this.localeWidth = this.fullWidth;
    this.otherWidth = '';
    this.caculateTotal();
  }

  paymentSuccess(response: object): void {

    this.loading = true;

    if((response['data']['data']['responsemessage'] === 'successful') &&
        (response['data']['data']['responsecode'] === '00')) {

      const paymentVar = {
        txIp: response['tx']['IP'],
        txRef: response['tx']['txRef'],
        raveRef: response['tx']['raveRef'],
        amount: response['tx']['amount'],
        appFee: response['tx']['appfee'],
        paymenttype: response['tx']['paymentType'],
        orderRef: response['tx']['orderRef'],
        status: response['data']['data']['responsemessage'],
        apptype: 'Transcript',
        dest: this.addressFormControl.value,
        nregion: this.overSeasRegionFormControl.value,
        outside: this.localRegionFormControl.value
      }

      console.log(paymentVar);

      this.paymentService.makePayment(paymentVar)
          .subscribe(
              (result: any) => {
                this.toastr.success('Payment details saved successfully!', 'Payment Successful');
                this.loading = false;
              },
              (error: any) => {

                if ( error != null) {
                  this.toastr.error('Error saving data', 'Failure saving');
                }
                this.loading = false;
              }
          );
    }
  }

  paymentInit(event): void {
    this.loading = true;
  }

  paymentFailure() {
    console.log('close');
  }

  changeRegion() {
    // TODO: remove stub
    console.log(this.localeFormControl.value);
    console.log(this.internationalRegionFee);
    if (this.localeFormControl.value === 'Local') {
      this.withinNigeria = true;
      this.outsideNigeria = false;
      this.localRegionFormControl.setValidators(Validators.required);
      this.overSeasRegionFormControl.clearValidators();
    } else if ( this.localeFormControl.value === 'International') {
      this.withinNigeria = false;
      this.outsideNigeria = true;
      this.localRegionFormControl.clearValidators();
      this.overSeasRegionFormControl.setValidators(Validators.required);
    }

    // reset region fee and recalculate
    this.regionFee = 0.0;
    this.caculateTotal();
    // change the width
    this.localeWidth = this.halfWidth;
    this.otherWidth = this.halfWidth;
  }

  calculateWithin() {
    this.regionFee = this.localRegionFee[this.localRegionFormControl.value].price;
    this.caculateTotal();
    console.log(this.regionFee);
    console.log(this.totalFee);
  }

  calculateOutside() {
    this.regionFee = this.internationalRegionFee[this.overSeasRegionFormControl.value].price;
    this.caculateTotal();
    console.log(this.regionFee);
    console.log(this.totalFee);
  }

  generateReference(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  paymentFee() {
    return this.transcriptFee + this.regionFee;
  }

  caculateTotal() {

    this.totalFee = this.transcriptFee + this.regionFee + this.surcharge;

  }

  currencyFormat(currency) {
    const num = parseFloat(currency);
    return 'N ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
