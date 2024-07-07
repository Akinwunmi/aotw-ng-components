import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagFormFieldComponent } from './form-field.component';

describe('FlagFormFieldComponent', () => {
  let component: FlagFormFieldComponent;
  let fixture: ComponentFixture<FlagFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagFormFieldComponent]
    });
    fixture = TestBed.createComponent(FlagFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
