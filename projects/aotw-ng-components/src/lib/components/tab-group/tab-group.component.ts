import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Tab } from './tab-group.model';

@Component({
  selector: 'aotw-ng-tab-group',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab-group.component.html',
})
export class AotwTabGroupComponent {
  @Input()
  public activeTab = 0;

  @Input()
  public tabs: Tab[] = [];

  @Output()
  public selectedTab = new EventEmitter<Tab>();

  public setActiveTab(activeTab: Tab): void {
    this.activeTab = activeTab.id;
    this.selectedTab.emit(activeTab);
  }
}
