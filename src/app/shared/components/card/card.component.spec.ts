import { fakeAsync, tick } from '@angular/core/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { CardComponent } from './card.component';

import { POST_DATA } from 'src/test/post.data';

describe('CardComponent', () => {
  let spectator: Spectator<CardComponent>;
  const createComponent = createComponentFactory({
    component: CardComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('props', () => {
    it('should not render the component if data input is not defined', () => {
      const allElements = spectator.queryAll('div');

      expect(allElements.length).toEqual(0);
    });

    it('should render the component if data input is defined', () => {
      spectator.component.data = POST_DATA;
      spectator.detectChanges();

      const allElements = spectator.queryAll('div');

      expect(allElements.length).not.toEqual(0);
    });
  });

  describe('onClick', () => {
    it('should call the method itself after the click', () => {
      jest.spyOn(spectator.component, 'onClick');

      spectator.click(spectator.element);

      expect(spectator.component.onClick).toHaveBeenCalled();
    });

    it('should set the `active` value to the status in dataset of element on first click', () => {
      spectator.click(spectator.element);
      const status = spectator.element.dataset['status'];

      expect(status).toBe('active');
    });

    it('should remove the status dataset of element after the second click', fakeAsync(() => {
      spectator.click(spectator.element);

      tick(350); // animation time

      spectator.click(spectator.element);
      const status = spectator.element.dataset['status'];

      expect(status).toBeUndefined();
    }));
  });
});
