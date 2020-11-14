import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CoinsItem = ({name, symbol}) => (
  <View>
    <Text>{name}</Text>
    <Text>{symbol}</Text>
  </View>
);
