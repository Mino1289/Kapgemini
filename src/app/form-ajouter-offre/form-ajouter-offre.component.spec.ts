import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterOffreComponent } from './form-ajouter-offre.component';

describe('FormAjouterOffreComponent', () => {
  let component: FormAjouterOffreComponent;
  let fixture: ComponentFixture<FormAjouterOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjouterOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjouterOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
