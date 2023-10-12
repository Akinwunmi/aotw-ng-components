import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwFormFieldComponent } from './form-field.component';

describe('AotwFormFieldComponent', () => {
  let component: AotwFormFieldComponent;
  let fixture: ComponentFixture<AotwFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AotwFormFieldComponent]
    });
    fixture = TestBed.createComponent(AotwFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
