import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { ApiConfigService } from './api-config.service';

import { APP_CONFIG } from '@core/injection-tokens/app-config.token';

const apiBaseUrl = '/api';

describe('ApiConfigService', () => {
  let spectator: SpectatorService<ApiConfigService>;

  const createService = createServiceFactory({
    service: ApiConfigService,
    providers: [
      {
        provide: APP_CONFIG,
        useValue: {
          apiBaseUrl: '/api',
        },
      },
    ],
  });

  beforeEach(() => (spectator = createService()));

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('baseUrl', () => {
    it('should return the validate endpoint url', () => {
      expect(spectator.service.baseUrl).toEqual(`${apiBaseUrl}`);
    });
  });
});
