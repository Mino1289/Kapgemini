import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureFullComponent } from './candidature-full.component';

describe('CandidatureFullComponent', () => {
  let component: CandidatureFullComponent;
  let fixture: ComponentFixture<CandidatureFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatureFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
