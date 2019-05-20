import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from '../../_shared/utils/custom-error-state-matcher';
import {FacultyDepartmentService} from '../../_shared/services/faculty-department.service';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../_shared/services/authentication.service';
import {UserService} from '../../_shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  updateUserFormGroup: FormGroup;

  fullNameFormControl = new FormControl( '', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
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
  buttonText = 'Update';

  constructor(private facultyDepartmentService: FacultyDepartmentService,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private auth: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    // build the form
    this.updateUserFormGroup =
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

    this.updateUserFormGroup.setValue({
      name: this.auth.currentUserValue.name,
      email: this.auth.currentUserValue.email,
      mat_no: this.auth.currentUserValue.matNo,
      faculty: '',
      dept: '',
      prog: '',
      phone: this.auth.currentUserValue.phone,
      password: ''
    });

    this.departmentFormControl.disable();
    this.emailFormControl.disable();
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

  updateProfile() {
    this.loading = true;
    this.buttonText = 'Update in progress...';
    const updateFormData = {
      name: this.fullNameFormControl.value,
      email: this.emailFormControl.value,
      mat_no: this.matricNoFormControl.value,
      faculty: this.facultyFormControl.value.faculty,
      dept: this.departmentFormControl.value,
      prog: this.programmeFormControl.value,
      phone: this.phoneFormControl.value,
      password: this.passwordFormControl.value,
      type: 'student'
    };

    this.userService.updateUserProfile(this.auth.currentUserValue.id, updateFormData)
        .subscribe(
            (result: any): any => {
              this.subscribeResult(true, null);
            },
            (error: any): any => {
              this.subscribeResult(false, error);
            }
        );
  }

  onFacultySelection(event) {
    this.loadDepartments(this.facultyFormControl.value);
    this.departmentFormControl.enable();
    this.departmentFormControl.setValidators(Validators.required);
  }

  subscribeResult(success: boolean, errorMessage: any): void {
    if (success) {
      this.toastr.success('User profile updated!', 'Update successful');
      this.clearForm();
    } else {
      this.toastr.error('An error occured while creating updating your profile, please try again later', 'Update failure');
    }
    this.loading = false;
    this.buttonText = 'Update';

  }

  clearForm(): void {
    this.updateUserFormGroup.reset();
    this.initializeFormGroup();
  }

  /**
   * Initialize form group
   */
  initializeFormGroup(): void {
    this.updateUserFormGroup.setValue({
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
