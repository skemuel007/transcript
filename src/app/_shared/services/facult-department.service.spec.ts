import { TestBed } from '@angular/core/testing';

import { FacultDepartmentService } from './facult-department.service';

describe('FacultDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultDepartmentService = TestBed.get(FacultDepartmentService);
    expect(service).toBeTruthy();
  });
});
