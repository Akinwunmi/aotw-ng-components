import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagTabComponent } from './tab.component';

describe('FlagTabComponent', () => {
  let component: FlagTabComponent;
  let fixture: ComponentFixture<FlagTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
