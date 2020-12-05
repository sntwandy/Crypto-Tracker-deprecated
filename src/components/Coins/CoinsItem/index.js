import React from 'react';
import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

// Resources
import {colors} from '../../../resources/colors';

export const CoinsItem = ({
  name,
  symbol,
  percent_change_1h,
  price_usd,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.priceText}>{`$${price_usd}`}</Text>
        <View style={percent_change_1h > 0 ? styles.rowGreen : styles.rowRed}>
          <Text style={styles.percentText}>{percent_change_1h}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
  },
  column: {
    flexDirection: 'column',
  },
  rowGreen: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    width: 70,
    height: 20,
    backgroundColor: colors.green,
  },
  rowRed: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    width: 70,
    height: 20,
    backgroundColor: colors.red,
  },
  symbolText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: colors.white,
    fontSize: 14,
    marginTop: 2,
  },
  priceText: {
    color: colors.white,
    fontSize: 14,
    marginLeft: 16,
  },
  percentText: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'right',
    width: 60,
    marginTop: 1,
  },
  imageIcon: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
});
