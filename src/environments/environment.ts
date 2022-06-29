import config from '../../package.json';

export const environment = {
  production: false,
  appVersion: config.version,
  configPath: '/assets/config.json',
};
