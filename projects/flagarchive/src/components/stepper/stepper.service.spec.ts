import { TestBed } from '@angular/core/testing';

import { FlagStepperService } from './stepper.service';

describe('FlagStepperService', () => {
  let service: FlagStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
