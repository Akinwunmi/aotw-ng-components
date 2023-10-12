import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aotw-ng-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrl: './skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AotwSkeletonComponent {
  @HostBinding('class.soft')
  @Input()
  public soft = false;

  @HostBinding('class.loading')
  @Input()
  public loading = false;
}
