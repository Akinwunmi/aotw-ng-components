import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCardComponent } from './card.component';

describe('FlagCardComponent', () => {
  let component: FlagCardComponent;
  let fixture: ComponentFixture<FlagCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
