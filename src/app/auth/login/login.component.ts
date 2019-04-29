import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from '../../_shared/utils/custom-error-state-matcher';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_shared/services/authentication.service';
import {ToastrService} from 'ngx-toastr';

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
  returnUrl = '';

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
              private toastr: ToastrService) { }

  ngOnInit() {

    this.loginFormGroup =
        this.formBuilder.group({
          email: this.emailFormControl,
          password: this.passwordFormControl,
        });
    this.returnUrl =  '/application/dashboard';
  }

  login(): void {
      this.loading = true;
      this.buttonText = 'Signing in...';
      this.auth.login(this.loginFormGroup.value)
          .subscribe(
              (result) => {
                  this.subscribeResult(true, null);
                  // TODO: remove when done
                  console.log(this.returnUrl);
                  this.router.navigateByUrl(this.returnUrl);
              },
              (error) => {
                  this.subscribeResult(false, error);

              }
          );
  }

  subscribeResult(success: boolean, errorMessage: any): void {
      if (success) {
          this.toastr.success('Login successful', 'Login success');
          this.loading = false;
          this.buttonText = 'Sign in';
          this.clearForm();
      } else {
          this.toastr.error('Error: ' + errorMessage.message, 'Login error');
          this.loading = false;
          this.buttonText = 'Sign in';
          this.clearForm();
      }

  }

  clearForm(): void {
      this.loginFormGroup.reset();
      this.initializeFormGroup();
  }

  initializeFormGroup(): void {
      this.loginFormGroup.controls.email.setValue('');
      this.loginFormGroup.controls.password.setValue('');
  }

}
