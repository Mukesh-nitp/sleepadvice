// AuthService.js
import { authorize } from 'react-native-app-auth';

// Fitbit OAuth configuration
const config = {
  issuer: 'https://www.fitbit.com/oauth2/authorize',
  clientId: '23Q2NX',
  clientSecret: '24870d1427ad76648c0eac789561e849',
  redirectUrl: 'sleepadviceapp://callback',
  scopes: ['sleep', 'activity', 'profile'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
    tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
  },
};

export const signInWithFitbit = async () => {
  try {
    console.log("Use sign in with fitbit .......");
    const authState = await authorize(config);
    console.log('Auth State: ', authState);
    // authState contains accessToken, accessTokenExpirationDate, refreshToken
    return authState;
  } catch (error) {
    console.error('OAuth Error: ', error);
    throw error;
  }
};
