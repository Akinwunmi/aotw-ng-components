import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwYearPickerComponent } from './year-picker.component';

describe('AotwYearPickerComponent', () => {
  let component: AotwYearPickerComponent;
  let fixture: ComponentFixture<AotwYearPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AotwYearPickerComponent]
    });
    fixture = TestBed.createComponent(AotwYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
