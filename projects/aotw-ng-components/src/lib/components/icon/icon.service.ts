import { Injectable } from '@angular/core';

import { Icon } from './icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private icons: Icon[] = [];

  public getIcon(name: string): Icon {
    const icon = this.icons.find(icon => icon.name === name);
    if (!icon) {
      throw new Error(`Icon not found: ${name}`);
    }
    return icon;
  }

  public register(icons: Icon[]): void {
    this.icons = icons;
  }
}
