import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagYearPickerComponent } from './year-picker.component';

describe('FlagYearPickerComponent', () => {
  let component: FlagYearPickerComponent;
  let fixture: ComponentFixture<FlagYearPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagYearPickerComponent]
    });
    fixture = TestBed.createComponent(FlagYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
