import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseFullComponent } from './entreprise-full.component';

describe('EntrepriseFullComponent', () => {
  let component: EntrepriseFullComponent;
  let fixture: ComponentFixture<EntrepriseFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
