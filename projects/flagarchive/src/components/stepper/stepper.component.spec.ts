import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagStepperComponent } from './stepper.component';

describe('FlagStepperComponent', () => {
  let component: FlagStepperComponent;
  let fixture: ComponentFixture<FlagStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagStepperComponent]
    });
    fixture = TestBed.createComponent(FlagStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
