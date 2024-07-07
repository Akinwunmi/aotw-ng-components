import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-card',
  standalone: true,
  styleUrl: './card.component.scss',
  templateUrl: './card.component.html',
})
export class FlagCardComponent {}
