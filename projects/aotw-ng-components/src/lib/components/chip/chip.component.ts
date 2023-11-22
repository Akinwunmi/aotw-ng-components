import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Component({
  selector: 'aotw-ng-chip',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class AotwChipComponent {
  @Input()
  public active = false;

  @HostBinding('class.disabled')
  @Input()
  public disabled = false;

  @Input()
  public size?: 'small' | 'medium';

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent): void {
    // Prevents selection of neighbouring text when clicking multiple times
    if (event.detail > 1) {
      event.preventDefault();
    }
  }
}
