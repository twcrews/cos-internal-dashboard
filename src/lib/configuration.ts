import { isDevMode } from '@angular/core';
import Configuration from '../assets/app.config.json';

const localStorageConfigurationProperty = (key: string) => ({
  get: () => localStorage.getItem(key),
  set: (secret: string) => localStorage.setItem(key, secret),
});

const baseUrl = getBaseUrl();
const planningCenter = Configuration.api.planningCenter;
const products = planningCenter.products;
const paths = planningCenter.paths;

export const planningCenterProducts = planningCenter.products;

export const planningCenterApiKey = localStorageConfigurationProperty(
  planningCenter.apiKeyName
);
export const clientHeadHash = localStorageConfigurationProperty(
  Configuration.api.headHashName
);

export const authenticationUrl = `${baseUrl}${Configuration.api.authenticationEndpoint}`;
export const headHashUrl = `${baseUrl}${Configuration.api.headHashEndpint}`;

export const peopleApiUrl = `${baseUrl}${products.people}`;
export const givingApiUrl = `${baseUrl}${products.giving}`;
export const servicesApiUrl = `${baseUrl}${products.services}`;
export const checkInsApiUrl = `${baseUrl}${products.checkIns}`;

export const newProfilesUrl = `${peopleApiUrl}${paths.newProfiles}`;
export const teamRsvpsUrl = `${servicesApiUrl}${paths.teamRsvps}`;
export const firstTimeVisitorsUrl = `${checkInsApiUrl}${paths.firstTimeVisitors}`;
export const birthdaysUrl = `${peopleApiUrl}${paths.birthdays}`;
export const newDonorsUrl = `${givingApiUrl}${paths.newDonors}`;

export const auditoriumChartUrl = `${peopleApiUrl}${paths.auditoriumChart}`;
export const kidsCheckInChartUrl = `${peopleApiUrl}${paths.kidsCheckInChart}`;
export const givingChartUrl = `${peopleApiUrl}${paths.givingChart}`;

function getBaseUrl() {
  if (isDevMode()) {
    return Configuration.api.devBaseUrl
  }

  if (window.location.href.toLowerCase().includes("stage")) {
    return Configuration.api.stageBaseUrl
  }

  return Configuration.api.baseUrl
}