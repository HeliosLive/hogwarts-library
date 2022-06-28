import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import type { AppConfig } from '@core/injection-tokens/app-config.token';
import { APP_CONFIG } from '@core/injection-tokens/app-config.token';

fetch(environment.configPath)
  .then((response) => response.json())
  .then((config: AppConfig) => {
    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config }])
      .bootstrapModule(AppModule)
      .catch((err: any) => console.error(err));
  });
