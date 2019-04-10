import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from '../../_shared/utils/custom-error-state-matcher';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_shared/services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  // variables for form
  hide = true;
  loginFormGroup: FormGroup;
  emailFormControl = new FormControl(
      '', [
          Validators.email,
          Validators.required,
      ]
  );
  passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
  ]);

  // create a returnUrl
  returnUrl: string;

  // button text
  buttonText = 'Sign in';

  // button loading
  loading = false;

  // error matcher
  matcher = new CustomErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private auth: AuthenticationService,
              private toastr: ToastrService,
              httpClient: HttpClient) { }

  ngOnInit() {

    this.loginFormGroup =
        this.formBuilder.group({
          email: this.emailFormControl,
          password: this.passwordFormControl,
        });
    console.log(localStorage.getItem('currentUser'));
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/app/dashboard';
  }

  login(): void {
  }

}
