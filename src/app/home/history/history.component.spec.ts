import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { HistoryComponent } from './history.component';

import { HgwReversePipeModule } from '@shared/pipes/reverse/reverse.pipe.module';

describe('HistoryComponent', () => {
  let spectator: Spectator<HistoryComponent>;
  const createComponent = createComponentFactory({
    component: HistoryComponent,
    imports: [HgwReversePipeModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
