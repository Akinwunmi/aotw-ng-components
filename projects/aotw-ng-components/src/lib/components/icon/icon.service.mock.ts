import { Icon, IconService } from '../../components';

import { ICONS } from './icons.mock';

export class MockIconService implements Partial<IconService> {
  public getIcon(name: string): Icon {
    return ICONS.find((icon) => icon.name === name) as Icon;
  }
}
