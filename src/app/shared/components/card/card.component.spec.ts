import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { CardComponent } from './card.component';

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

    it('should remove the status dataset of element after the second click', () => {
      spectator.mouse.dblclick(spectator.element);
      const status = spectator.element.dataset['status'];

      expect(status).toBeUndefined();
    });
  });
});
