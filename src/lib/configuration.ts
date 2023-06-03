import * as Configuration from '../assets/app.config.json';

const localStorageConfigurationProperty = (key: string) => ({
  get: () => localStorage.getItem(key),
  set: (secret: string) => localStorage.setItem(key, secret),
});

export const planningCenterOauthSecret = localStorageConfigurationProperty(
  Configuration.planningCenter.api.auth.oauthSecretKey
);

export const planningCenterBearerToken = localStorageConfigurationProperty(
  Configuration.planningCenter.api.auth.bearerTokenKey
);

export const planningCenterRefreshToken = localStorageConfigurationProperty(
  Configuration.planningCenter.api.auth.refreshTokenKey
);

export const planningCenterOauthInitUrl =
  Configuration.planningCenter.api.auth.oauthInitUrl;

export const planningCenterProducts = Configuration.planningCenter.api.products;
