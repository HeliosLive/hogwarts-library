import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { HistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let spectator: Spectator<HistoryComponent>;
  const createComponent = createComponentFactory({
    component: HistoryComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
