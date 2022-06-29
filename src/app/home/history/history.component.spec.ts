import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { asapScheduler, scheduled } from 'rxjs';

import { HistoryComponent } from './history.component';

import type { Post } from '@shared/models/post.interface';
import { HgwReversePipeModule } from '@shared/pipes/reverse/reverse.pipe.module';
import { HistoryService } from '../services/history.service';
import { POST_DATA, POSTS_DATA } from 'src/test/post.data';

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

  describe('trackByFn', () => {
    it('should return the index if it is defined', () => {
      const index = 2;
      const method = spectator.component.trackByFn(index, undefined as any);

      expect(method).toEqual(index);
    });

    it('should return the item id if index is not defined', () => {
      const method = spectator.component.trackByFn(undefined as any, POST_DATA);

      expect(method).toEqual(POST_DATA.id);
    });
  });
});
