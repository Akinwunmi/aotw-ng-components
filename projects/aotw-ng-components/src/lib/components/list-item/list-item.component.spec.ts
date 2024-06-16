import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagListItemComponent } from './list-item.component';

describe('FlagListItemComponent', () => {
  let component: FlagListItemComponent;
  let fixture: ComponentFixture<FlagListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagListItemComponent]
    });
    fixture = TestBed.createComponent(FlagListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
