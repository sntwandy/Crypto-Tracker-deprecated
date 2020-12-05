import React from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// Custom Hooks
import {useCoins} from '../../../hooks/useCoins';

// Components
import {CoinsItem} from '../CoinsItem';

// Resources
import {colors} from '../../../resources/colors';

export const CoinsScreen = (props) => {
  const [coins, setCoins] = useCoins();

  // Handling the button press event
  const handlePress = (coin) => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  return (
    <View style={styles.container}>
      {coins !== undefined ? (
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CoinsItem {...item} onPress={() => handlePress(item)} />
          )}
        />
      ) : (
        <ActivityIndicator style={styles.loader} color="#000" size="large" />
      )}
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
    backgroundColor: colors.charade,
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
  loader: {
    marginTop: 60,
    marginBottom: 60,
  },
});
