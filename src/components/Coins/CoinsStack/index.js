import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import {CoinsScreen} from '../CoinsScreen';
import {CoinDetailScreen} from '../CoinDetailScreen';

const Stack = createStackNavigator();

export const CoinsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Coins" component={CoinsScreen} />
    <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
  </Stack.Navigator>
);
