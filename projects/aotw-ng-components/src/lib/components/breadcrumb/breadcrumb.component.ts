import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { BreadcrumbItem } from './breadcrumb.model';

@Component({
  selector: 'aotw-ng-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class AotwBreadcrumbComponent {
  @Input()
  public items: BreadcrumbItem[] = [];

  @Output()
  public selectedItem = new EventEmitter<BreadcrumbItem>();

  public selectItem(item: BreadcrumbItem): void {
    this.selectedItem.emit(item);
  }
}
