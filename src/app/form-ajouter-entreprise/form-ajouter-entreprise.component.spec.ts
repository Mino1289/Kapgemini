import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterEntrepriseComponent } from './form-ajouter-entreprise.component';

describe('FormAjouterEntrepriseComponent', () => {
  let component: FormAjouterEntrepriseComponent;
  let fixture: ComponentFixture<FormAjouterEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjouterEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjouterEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
