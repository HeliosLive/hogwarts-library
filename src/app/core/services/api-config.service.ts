import { Inject, Injectable } from '@angular/core';

import { APP_CONFIG, AppConfig } from '@core/injection-tokens/app-config.token';

@Injectable({ providedIn: 'any' })
export class ApiConfigService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  get baseUrl(): string {
    return `${this.appConfig.apiBaseUrl}`;
  }
}
