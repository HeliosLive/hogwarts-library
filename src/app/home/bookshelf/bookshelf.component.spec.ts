import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { BookshelfComponent } from './bookshelf.component';

describe('BookshelfComponent', () => {
  let spectator: Spectator<BookshelfComponent>;
  const createComponent = createComponentFactory({
    component: BookshelfComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
