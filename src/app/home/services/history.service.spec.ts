import { fakeAsync, tick } from '@angular/core/testing';

import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { HistoryService } from './history.service';

import type { Post } from '@shared/models/post.interface';
import { POSTS_DATA, POST_DATA } from 'src/test/post.data';

describe('HistoryService', () => {
  let spectator: SpectatorService<HistoryService>;
  const posts: Post[] = POSTS_DATA;
  const post: Post = POST_DATA;

  const createService = createServiceFactory({
    service: HistoryService,
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('getAllData', () => {
    it('should return the expected post values on a subscription', fakeAsync(() => {
      spectator.service.set(post);
      tick();

      spectator.service.data$.subscribe((values) => {
        expect(values).toEqual(posts);
      });
    }));
  });
});
