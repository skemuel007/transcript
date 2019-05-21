import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusaryComponent } from './busary.component';

describe('BusaryComponent', () => {
  let component: BusaryComponent;
  let fixture: ComponentFixture<BusaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
