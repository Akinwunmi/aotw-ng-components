import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { BreadcrumbItem } from './breadcrumb.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'flag-breadcrumb',
  standalone: true,
  styleUrl: './breadcrumb.component.scss',
  templateUrl: './breadcrumb.component.html',
})
export class FlagBreadcrumbComponent {
  public items = input.required<BreadcrumbItem[]>();

  public selectedItem = output<BreadcrumbItem>();

  public selectItem(item: BreadcrumbItem): void {
    this.selectedItem.emit(item);
  }
}
