import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreFullComponent } from './offre-full.component';

describe('OffreFullComponent', () => {
  let component: OffreFullComponent;
  let fixture: ComponentFixture<OffreFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
