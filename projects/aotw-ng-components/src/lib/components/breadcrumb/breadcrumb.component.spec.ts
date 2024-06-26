import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwBreadcrumbComponent } from './breadcrumb.component';

describe('AotwBreadcrumbComponent', () => {
  let component: AotwBreadcrumbComponent;
  let fixture: ComponentFixture<AotwBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AotwBreadcrumbComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AotwBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
