import * as Configuration from '../assets/app.config.json';

const planningCenterApiSecretLocalStorageKey =
  localStorage.getItem(Configuration.planningCenter.api.auth.secretKey) ??
  'planningCenter-api-secret';

const loadPlanningCenterApiSecretFromStorage = () => {
  let tokenString = localStorage.getItem(
    planningCenterApiSecretLocalStorageKey
  );
  return tokenString ?? '';
};

export type BasicAuthenticationCredentials = {
  id: string;
  secret: string;
};

export const getPlanningCenterApiCredentials: BasicAuthenticationCredentials = {
  id: Configuration.planningCenter.api.auth.appId,
  secret: loadPlanningCenterApiSecretFromStorage(),
};
