import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export const CoinsScreen = (props) => {
  const handlePress = () => {
    console.log('Go to details', props);
    props.navigation.navigate('CoinDetail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins View</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Go to detail</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'green',
    padding: 8,
    margin: 16,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
