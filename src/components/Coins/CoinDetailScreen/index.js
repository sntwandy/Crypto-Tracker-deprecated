import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CoinDetailScreen = () => (
  <View style={styles.container}>
    <Text style={styles.titleText}>Coin Detail Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242424',
    flex: 1,
  },
  titleText: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});
