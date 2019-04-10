import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from '../../_shared/utils/custom-error-state-matcher';
import {FacultDepartmentService} from '../../_shared/services/facult-department.service';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../_shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  // registeration form group
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
  faculties: any = [];
  departments: any = [];

  loading = false;
  hide = true;
  buttonText = 'Register';

  constructor(private facultyDepartmentService: FacultDepartmentService,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private auth: AuthenticationService) { }

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
              this.faculties = data.faculties;
              this.departments = this.faculties.find(
                  result => result.faculty === faculty).departments;
            }
        );
  }

  onFacultySelection(event, faculty) {
    this.loadDepartments(this.facultyFormControl.value);
    // TODO: do validation for department
    this.departmentFormControl.enable();
    this.departmentFormControl.setValidators(Validators.required);
  }

  register() {
    this.loading = true;
    this.buttonText = 'Registration in progress...';
    this.auth.register(this.registerFormGroup.value)
        .subcribe(
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
    } else {
      this.toastr.error('Error: ' + errorMessage.message, 'Registration error');
    }
    this.loading = false;
    this.buttonText = 'Register';
    this.clearForm();

  }

  clearForm(): void {
    this.registerFormGroup.reset();
    this.initializeFormGroup();
  }

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
