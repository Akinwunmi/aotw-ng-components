import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-form-field',
  standalone: true,
  styleUrl: './form-field.component.scss',
  templateUrl: './form-field.component.html',
})
export class FlagFormFieldComponent {
  public errorMessage = input<string>();
  public infoMessage = input<string>();
}
