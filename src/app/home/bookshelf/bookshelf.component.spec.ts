import { fakeAsync, tick } from '@angular/core/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { asapScheduler, scheduled } from 'rxjs';

import { BookshelfComponent } from './bookshelf.component';

import { PostsService } from '../services/posts.service';
import { HistoryService } from '../services/history.service';
import { CardComponent } from '@shared/components/card/card.component';
import { POSTS_DATA, POST_DATA } from 'src/test/post.data';

describe('BookshelfComponent', () => {
  let spectator: Spectator<BookshelfComponent>;
  let postsService: PostsService;
  let historyService: HistoryService;

  const createComponent = createComponentFactory({
    component: BookshelfComponent,
    mocks: [PostsService, HistoryService, CardComponent],
    detectChanges: false,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();

    postsService = spectator.inject(PostsService);
    historyService = spectator.inject(HistoryService);

    postsService.fetch = jest.fn();
    postsService.data$ = scheduled([POSTS_DATA], asapScheduler);
    historyService.set = jest.fn();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spectator.component.ngOnInit();
      spectator.detectChanges();
    });
    it('should posts data equals to what service has been returned', fakeAsync(() => {
      tick();

      spectator.component.posts$.subscribe((values) => {
        expect(values).toEqual(POSTS_DATA);
      });
    }));

    it('should hgw-card template count equals to data length', fakeAsync(() => {
      tick();

      spectator.component.posts$.subscribe();
      spectator.detectChanges();

      const cards = spectator.queryAll('hgw-card', { read: CardComponent });

      expect(cards.length).toEqual(POSTS_DATA.length);
    }));
  });

  describe('onClick', () => {
    it('should call the method after clicking the card element', fakeAsync(() => {
      jest.spyOn(spectator.component, 'onClick');
      spectator.component.ngOnInit();
      spectator.detectChanges();

      tick();

      spectator.component.posts$.subscribe();
      spectator.detectChanges();

      const card = spectator.queryAll('hgw-card')[0];

      if (card) {
        spectator.click(card);
      }

      expect(spectator.component.onClick).toHaveBeenCalled();
      expect(spectator.component.onClick).toHaveBeenCalledWith(POST_DATA);
    }));

    it('should call the set method with given post data', () => {
      spectator.component.onClick(POST_DATA);

      expect(historyService.set).toHaveBeenCalled();
      expect(historyService.set).toHaveBeenCalledWith(POST_DATA);
    });
  });
});
