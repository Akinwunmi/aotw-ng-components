import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwSkeletonComponent } from './skeleton.component';

describe('AotwSkeletonComponent', () => {
  let component: AotwSkeletonComponent;
  let fixture: ComponentFixture<AotwSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AotwSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AotwSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
