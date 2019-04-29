import { TestBed } from '@angular/core/testing';

import { FacultyDepartmentService } from './faculty-department.service';

describe('FacultyDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyDepartmentService = TestBed.get(FacultyDepartmentService);
    expect(service).toBeTruthy();
  });
});
