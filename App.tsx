/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Ensure this file exists at the specified path
import SleepActivityScreen from './src/screens/SleepActivityScreen';
import SleepAdviceScreen from './src/screens/SleepAdviceScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return ( 
     <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SleepActivity" component={SleepActivityScreen} />
        <Stack.Screen name="SleepAdvice" component={SleepAdviceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
