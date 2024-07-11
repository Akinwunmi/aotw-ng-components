import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagBreadcrumbComponent } from './breadcrumb.component';

describe('FlagBreadcrumbComponent', () => {
  let component: FlagBreadcrumbComponent;
  let fixture: ComponentFixture<FlagBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FlagBreadcrumbComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
