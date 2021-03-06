import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
  apiVersion: string;
  environment: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
