import Configuration from '../assets/app.config.json';

const localStorageConfigurationProperty = (key: string) => ({
  get: () => localStorage.getItem(key),
  set: (secret: string) => localStorage.setItem(key, secret),
});

const api = Configuration.planningCenter.api;
const products = api.products;
const paths = api.paths;

export const planningCenterProducts = api.products;

export const planningCenterApiKey = localStorageConfigurationProperty(
  api.apiKeyName
);

export const authenticationUrl = `${api.baseUrl}${api.authenticationEndpoint}`;

export const peopleApiUrl = `${api.baseUrl}${products.people}`;
export const givingApiUrl = `${api.baseUrl}${products.giving}`;
export const servicesApiUrl = `${api.baseUrl}${products.services}`;
export const checkInsApiUrl = `${api.baseUrl}${products.checkIns}`;

export const newProfilesUrl = `${peopleApiUrl}${paths.newProfiles}`;
export const teamRsvpsUrl = `${servicesApiUrl}${paths.teamRsvps}`;
export const firstTimeVisitorsUrl = `${checkInsApiUrl}${paths.firstTimeVisitors}`;
export const birthdaysUrl = `${peopleApiUrl}${paths.birthdays}`;
export const newDonorsUrl = `${givingApiUrl}${paths.newDonors}`;

export const auditoriumChartUrl = `${peopleApiUrl}${paths.auditoriumChart}`;
export const kidsCheckInChartUrl = `${peopleApiUrl}${paths.kidsCheckInChart}`;
export const givingChartUrl = `${peopleApiUrl}${paths.givingChart}`;

export const cosEventsCalendarUrl = Configuration.google.calendar.ical.cosEvents;