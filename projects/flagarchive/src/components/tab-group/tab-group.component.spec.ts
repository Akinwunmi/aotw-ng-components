import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagTabGroupComponent } from './tab-group.component';

describe('FlagTabGroupComponent', () => {
  let component: FlagTabGroupComponent;
  let fixture: ComponentFixture<FlagTabGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagTabGroupComponent]
    });
    fixture = TestBed.createComponent(FlagTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
