import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-icon',
  standalone: true,
  styleUrl: './icon.component.scss',
  templateUrl: './icon.component.html',
})
export class FlagIconComponent {
  @HostBinding('class')
  protected iconClass = 'material-symbols-rounded';
}
