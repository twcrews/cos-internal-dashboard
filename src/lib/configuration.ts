import Configuration from '../assets/app.config.json';

const localStorageConfigurationProperty = (key: string) => ({
  get: () => localStorage.getItem(key),
  set: (secret: string) => localStorage.setItem(key, secret),
});

export const planningCenterProducts = Configuration.planningCenter.api.products;

export const planningCenterApiKey = localStorageConfigurationProperty(
  Configuration.planningCenter.api.apiKeyName
);

export const authenticationUrl = `${
  Configuration.planningCenter.api.baseUrl
}${
  Configuration.planningCenter.api.authenticationEndpoint
}`