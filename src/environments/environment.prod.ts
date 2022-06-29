import config from '../../package.json';

export const environment = {
  production: true,
  appVersion: config.version,
  configPath: '/assets/config.json',
};
