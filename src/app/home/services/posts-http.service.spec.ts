import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';

import { PostsHttpService } from './posts-http.service';

import { ApiConfigService } from '@core/services/api-config.service';

const apiUrl = 'api/v1';
const apiBaseEndPoint = 'posts';
const baseUrl = `${apiUrl}/${apiBaseEndPoint}`;

describe('PostsHttpService', () => {
  let spectator: SpectatorHttp<PostsHttpService>;

  const createHttp = createHttpFactory({
    service: PostsHttpService,
    providers: [{ provide: ApiConfigService, useValue: { baseUrl: apiUrl } }],
  });

  beforeEach(() => {
    spectator = createHttp();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('load', () => {
    it('should make an http get request to correct endpoint', () => {
      const data = spectator.service.load();

      data.subscribe();

      spectator.expectOne(`${baseUrl}`, HttpMethod.GET);
    });
  });
});
