import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultDepartmentService {

  facultyDepartmentUrl = '../../../assets/data/faculties_and_departments.json';
  constructor(private http: HttpClient) { }

  getFaculties(): any {
    return this.http.get<any>(this.facultyDepartmentUrl);
  }

  getDepartments(): any {
    return this.http.get<any>(this.facultyDepartmentUrl);
  }
}
