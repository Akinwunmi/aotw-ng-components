import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';

import { IconService } from './icon.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-icon',
  standalone: true,
  styleUrl: './icon.component.scss',
  template: '',
})
export class FlagIconComponent {
  private readonly elementRef = inject(ElementRef);
  private readonly iconService = inject(IconService);

  public name = input.required<string>();
  
  public constructor() {
    effect(() => {
      const icon = this.iconService.getIcon(this.name());
      this.elementRef.nativeElement.innerHTML = icon.data;
    });
  }
}
