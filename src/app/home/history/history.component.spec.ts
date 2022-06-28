import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { asapScheduler, scheduled } from 'rxjs';

import { HistoryComponent } from './history.component';

import type { Post } from '@shared/models/post.interface';
import { HgwReversePipeModule } from '@shared/pipes/reverse/reverse.pipe.module';
import { HistoryService } from '../services/history.service';
import { POSTS_DATA } from 'src/test/post.data';

describe('HistoryComponent', () => {
  let spectator: Spectator<HistoryComponent>;
  let historyService: HistoryService;

  const createComponent = createComponentFactory({
    component: HistoryComponent,
    imports: [HgwReversePipeModule],
    mocks: [HistoryService],
  });

  beforeEach(() => {
    spectator = createComponent();

    historyService = spectator.inject(HistoryService);
    historyService.data$ = scheduled([POSTS_DATA], asapScheduler);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should posts$ observable data equals to service response', () => {
      spectator.component.ngOnInit();

      spectator.component.posts$.subscribe((values: Post[]) => {
        expect(values).toEqual(POSTS_DATA);
      });
    });
  });
});
