import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
