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

export const peopleApiUrl = `${
  Configuration.planningCenter.api.baseUrl
}${
  Configuration.planningCenter.api.products.people
}`

export const givingApiUrl = `${
  Configuration.planningCenter.api.baseUrl
}${
  Configuration.planningCenter.api.products.giving
}`

export const servicesApiUrl = `${
  Configuration.planningCenter.api.baseUrl
}${
  Configuration.planningCenter.api.products.services
}`

export const checkInsApiUrl = `${
  Configuration.planningCenter.api.baseUrl
}${
  Configuration.planningCenter.api.products.checkIns
}`