import { fakeAsync, tick } from '@angular/core/testing';

import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { asapScheduler, scheduled } from 'rxjs';

import { PostsService } from './posts.service';

import type { Post } from '@shared/models/post.interface';
import { PostsHttpService } from './posts-http.service';
import { POSTS_DATA } from 'src/test/post.data';

describe('PostsService', () => {
  let spectator: SpectatorService<PostsService>;
  let postsHttpService: PostsHttpService;
  const expectedData: Post[] = POSTS_DATA;

  const createService = createServiceFactory({
    service: PostsService,
    mocks: [PostsHttpService],
  });

  beforeEach(() => {
    spectator = createService();

    postsHttpService = spectator.inject(PostsHttpService);

    postsHttpService.load = jest.fn(() => {
      return scheduled([expectedData], asapScheduler);
    });
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('fetch', () => {
    it('should data$ return the expected post values after calling the method', fakeAsync(() => {
      spectator.service.fetch();
      tick();

      spectator.service.data$.subscribe((values) => {
        expect(values).toEqual(expectedData);
      });
    }));
  });
});
