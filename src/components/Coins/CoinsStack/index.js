import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import {CoinsScreen} from '../CoinsScreen';

const Stack = createStackNavigator();

export const CoinsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Coins" component={CoinsScreen} />
  </Stack.Navigator>
);
