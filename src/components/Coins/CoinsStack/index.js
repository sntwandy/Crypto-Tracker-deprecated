import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import {CoinsScreen} from '../CoinsScreen';
import {CoinDetailScreen} from '../CoinDetailScreen';

// Resources
import {colors} from '../../../resources/colors';

const Stack = createStackNavigator();

export const CoinsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.blackPearl,
        shadowColor: colors.blackPearl,
      },
      headerTintColor: colors.white,
    }}>
    <Stack.Screen name="Coins" component={CoinsScreen} />
    <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
  </Stack.Navigator>
);
