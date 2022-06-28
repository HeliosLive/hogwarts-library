import { fakeAsync, tick } from '@angular/core/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { asapScheduler, scheduled } from 'rxjs';

import { BookshelfComponent } from './bookshelf.component';

import { PostsService } from '../services/posts.service';
import { CardComponent } from '@shared/components/card/card.component';
import { POSTS_DATA } from 'src/test/post.data';

describe('BookshelfComponent', () => {
  let spectator: Spectator<BookshelfComponent>;
  let postsService: PostsService;

  const createComponent = createComponentFactory({
    component: BookshelfComponent,
    mocks: [PostsService, CardComponent],
    detectChanges: false,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();

    postsService = spectator.inject(PostsService);
    postsService.getAllData = jest.fn(() =>
      scheduled([POSTS_DATA], asapScheduler)
    );
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should posts data equals to what service has been returned', fakeAsync(() => {
      spectator.component.ngOnInit();
      tick();

      expect(spectator.component.posts).toEqual(POSTS_DATA);
    }));

    it('should hgw-card template count equals to data length', fakeAsync(() => {
      spectator.component.ngOnInit();
      tick();

      spectator.detectChanges();

      const cards = spectator.queryAll('hgw-card', { read: CardComponent });

      expect(cards.length).toEqual(POSTS_DATA.length);
    }));
  });
});
