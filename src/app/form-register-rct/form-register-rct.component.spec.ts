import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterRctComponent } from './form-register-rct.component';

describe('FormRegisterRctComponent', () => {
  let component: FormRegisterRctComponent;
  let fixture: ComponentFixture<FormRegisterRctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterRctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterRctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
