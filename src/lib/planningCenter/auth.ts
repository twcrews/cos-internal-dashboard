import {
  planningCenterOauthInitUrl,
  planningCenterRefreshToken,
} from '../configuration';

export const refreshOauth = () => {
  authenticateIfNeeded();

  const refreshToken = planningCenterRefreshToken.get();
  if (refreshToken === null) {
    window.open(planningCenterOauthInitUrl);
  }
};

const authenticateIfNeeded = () => {
  const urlParams = new URLSearchParams(location.search);
  const oauthCode = urlParams.get('code');

  if (oauthCode !== null) {
  }
};
