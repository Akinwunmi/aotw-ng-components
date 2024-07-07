import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[flagButton]',
  standalone: true
})
export class FlagButtonDirective implements OnInit {
  private elementRef = inject(ElementRef);

  public get element(): HTMLButtonElement {
    return this.elementRef.nativeElement as HTMLButtonElement;
  }

  public ngOnInit(): void {
    if (this.element.childNodes.length !== 1) {
      return;
    }

    const node = this.element.childNodes[0];
    const isFlagIcon = node.nodeName === 'FLAG-ICON';
    this.element.toggleAttribute('icon-only', isFlagIcon);

    if (isFlagIcon) {
      (node as HTMLElement).style.width = 'var(--flag-size-sm)';
    }
  }
}
