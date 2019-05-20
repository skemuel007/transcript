import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from '../../_shared/utils/custom-error-state-matcher';
import {FacultyDepartmentService} from '../../_shared/services/faculty-department.service';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../_shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  // registration form group
  registerFormGroup: FormGroup;

  fullNameFormControl = new FormControl( '', [
      Validators.required
  ]);
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);

  matricNoFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{5}')
  ]);

  facultyFormControl = new FormControl('', [
      Validators.required,
  ]);

  departmentFormControl = new FormControl('', [

      ]
  );

  phoneFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(11)
  ]);
  programmeFormControl = new FormControl('', [
      Validators.required
  ]);
  passwordFormControl = new FormControl('', [
     Validators.required,
     Validators.minLength(5)
  ]);

  matcher = new CustomErrorStateMatcher();
  faculties = [];
  departments = [];

  loading = false;
  hide = true;
  buttonText = 'Register';

  constructor(private facultyDepartmentService: FacultyDepartmentService,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit() {

    // build the form
    this.registerFormGroup =
        this.formBuilder.group({
          name: this.fullNameFormControl,
          email: this.emailFormControl,
          mat_no: this.matricNoFormControl,
          faculty: this.facultyFormControl,
          dept: this.departmentFormControl,
          prog: this.programmeFormControl,
          phone: this.phoneFormControl,
          password: this.passwordFormControl

        });

    this.departmentFormControl.disable();
    this.loadFaculty();
  }

  loadFaculty() {
    this.facultyDepartmentService.getFaculties().subscribe(
        (data: any) => {
          this.faculties = data.faculties;
        }
    );
  }

  loadDepartments(faculty) {
    this.facultyDepartmentService.getDepartments()
        .subscribe(
            (data: any) => {
              /*this.departments = data.faculties.find(
                  result => result.faculty === faculty).departments; */
              for (const value of data.faculties) {
                  if ( value.faculty === faculty.faculty) {
                      this.departments = value.departments;
                      break;
                  }
              }
            }
        );
  }

  onFacultySelection(event) {
    this.loadDepartments(this.facultyFormControl.value);
    this.departmentFormControl.enable();
    this.departmentFormControl.setValidators(Validators.required);
  }

  register() {
    this.loading = true;
    this.buttonText = 'Registration in progress...';
    const registerFormData = {
        name: this.fullNameFormControl.value,
        email: this.emailFormControl.value,
        mat_no: this.matricNoFormControl.value,
        faculty: this.facultyFormControl.value.faculty,
        dept: this.departmentFormControl.value,
        prog: this.programmeFormControl.value,
        phone: this.phoneFormControl.value,
        password: this.passwordFormControl.value
    };

    this.auth.register(registerFormData)
        .subscribe(
            (result) => {
              this.subscribeResult(true, null);
            },
            (error) => {
              this.subscribeResult(false, error);

            }
        );
  }

  subscribeResult(success: boolean, errorMessage: any): void {
    if (success) {
      this.toastr.success('Registration successful', 'Registration success');
      this.clearForm();
      this.router.navigate(['auth/login']);
    } else {
      this.toastr.error('An error occured while creating your account, please try again later', 'Registration error');
    }
    this.loading = false;
    this.buttonText = 'Register';

  }

  clearForm(): void {
    this.registerFormGroup.reset();
    this.initializeFormGroup();
  }

    /**
     * Initialize form group
     */
  initializeFormGroup(): void {
    this.registerFormGroup.setValue({
      name: '',
      email: '',
      mat_no: '',
      faculty: '',
      dept: '',
      prog: '',
      phone: '',
      password: ''
    });
    this.departmentFormControl.disable();
  }

}
