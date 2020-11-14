import React, {useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

// Libs
import Http from '../../../libs/Htpp';

export const CoinsScreen = (props) => {
  // API url
  const urlAPI = 'https://api.coinlore.net/api/tickers/';

  // Handling the button press event
  const handlePress = () => {
    console.log('Go to details', props);
    props.navigation.navigate('CoinDetail');
  };

  // Calling to the API to fetch the data
  const callAPI = async () => {
    const coins = await Http.instance.get(urlAPI);
    console.log('coins: ', coins);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins View</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Go to detail</Text>
      </Pressable>
    </View>
  );
};

// View Styles
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
