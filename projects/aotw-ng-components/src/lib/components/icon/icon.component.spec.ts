import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagIconComponent } from './icon.component';

describe('FlagIconComponent', () => {
  let component: FlagIconComponent;
  let fixture: ComponentFixture<FlagIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagIconComponent]
    });
    fixture = TestBed.createComponent(FlagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
