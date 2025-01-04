import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//import { signInWithFitbit } from './AuthService';
import { authorize } from 'react-native-app-auth';

const SleepActivityScreen: React.FC = () => {
    const [authState, setAuthState] = useState(null);
    const [error, setError] = useState(null);
    /*  const [sleepEnd, setSleepEnd] = useState<Date | null>(null);
    const [sleepStart, setSleepStart] = useState<Date | null>(null);
    const [sleepDuration, setSleepDuration] = useState<string | null>(null);

    const startSleep = () => {
        setSleepStart(new Date());
        setSleepEnd(null);
        setSleepDuration(null);
    };

    const endSleep = () => {
        if (sleepStart) {
            const end = new Date();
            setSleepEnd(end);
            const duration = (end.getTime() - sleepStart.getTime()) / 1000 / 60 / 60;
            setSleepDuration(duration.toFixed(2));
        }
    };

    useEffect(() => {
        console.log("Use efffects ");
        signInWithFitbit();
        if (sleepStart && sleepEnd) {
            const duration = (sleepEnd.getTime() - sleepStart.getTime()) / 1000 / 60 / 60;
            setSleepDuration(duration.toFixed(2));
        }
    }, [sleepStart, sleepEnd]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sleep Activity Tracker</Text>
            <Button title="Start Sleep" onPress={startSleep} />
            <Button title="End Sleep" onPress={endSleep} disabled={!sleepStart || !!sleepEnd} />
            {sleepDuration && (
                <Text style={styles.duration}>Sleep Duration: {sleepDuration} hours</Text>
            )}
        </View>
    ); */
    return (
        <View>
          <Button title="Login with Fitbit" onPress={signInWithFitbit} />
          {authState && <Text>Access Token: </Text>}
          {error && <Text>{error}</Text>}
        </View>
      );
};

const config = {
      issuer: 'https://www.fitbit.com/oauth2/authorize',
      clientId: '23Q2NX',
      clientSecret: '24870d1427ad76648c0eac789561e849',
      redirectUrl: 'sleepadvice://callback',
      scopes: ['activity', 'profile', 'heartrate'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
        tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
      },
    };

const signInWithFitbit = async () => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    duration: {
        marginTop: 16,
        fontSize: 18,
    },
});

export default SleepActivityScreen;