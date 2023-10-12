import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
} from '@angular/core';

@Component({
  selector: 'aotw-ng-form-field',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class AotwFormFieldComponent {
  @Input()
  public label?: string;

  @Input()
  public message?: string;
}
