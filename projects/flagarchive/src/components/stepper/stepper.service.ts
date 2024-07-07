import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Step } from './stepper.model';

@Injectable({
  providedIn: 'root'
})
export class FlagStepperService {
  public steps$ = new Subject<Step[]>();

  public setSteps(steps: Step[]): void {
    return this.steps$.next(steps);
  }
}
