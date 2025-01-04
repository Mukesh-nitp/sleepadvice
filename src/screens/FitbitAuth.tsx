import { authorize } from 'react-native-app-auth';

const fitbitConfig = {
  clientId: '23PZYD',
  clientSecret: '674d35cb2eeceaefed756362d56a7313',
  redirectUrl: 'http://localhost:8081', // e.g., com.myapp://oauthredirect
  scopes: ['sleep', 'activity', 'profile'], // Scopes you need
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
    tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
    revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',
  },
};

export const fitbitLogin = async () => {
  try {
    const result = await authorize(fitbitConfig);
    console.log("Auth Response : ", result);
    return result; // Contains accessToken, refreshToken, etc.
  } catch (error) {
    console.error('Fitbit login error', error);
  }
};
