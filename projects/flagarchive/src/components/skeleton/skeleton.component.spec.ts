import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSkeletonComponent } from './skeleton.component';

describe('FlagSkeletonComponent', () => {
  let component: FlagSkeletonComponent;
  let fixture: ComponentFixture<FlagSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagSkeletonComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FlagSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
