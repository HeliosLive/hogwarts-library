import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';

@Component({
  template: '',
})
class DummyComponent {}

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let animationState = 'mockPath';

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      RouterTestingModule.withRoutes([
        {
          path: animationState,
          component: DummyComponent,
          data: { animationState },
        },
      ]),
    ],
    detectChanges: false,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('getRouteAnimationState', () => {
    it('should call the method if route data includes and animationState value', () => {
      jest.spyOn(spectator.component, 'getRouteAnimationState');

      spectator.detectChanges();

      expect(spectator.component.getRouteAnimationState).toHaveBeenCalled();
    });
  });
});
