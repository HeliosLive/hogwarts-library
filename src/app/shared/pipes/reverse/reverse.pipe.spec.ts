import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  const createService = createServiceFactory({
    service: ReversePipe,
  });

  let spectator: SpectatorService<ReversePipe>;

  beforeEach(() => {
    spectator = createService();
  });

  it('should create an instance', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return the reverse of the given array', () => {
      const value = [1, 2, 3, 4, 5];
      const expected = value.slice().reverse();

      const response = spectator.service.transform(value);

      expect(response).toEqual(expected);
    });
  });
});
