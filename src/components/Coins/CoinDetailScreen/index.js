import React, {useState, useEffect} from 'react';
import {View, Text, Image, SectionList, StyleSheet} from 'react-native';

// Colors
import {colors} from '../../../resources/colors';

export const CoinDetailScreen = (props) => {
  // Coin comming from props

  const [coin, setCoin] = useState(props.route.params.coin);

  const getSymbolIcon = (nameStr) => {
    if (nameStr) {
      const name = nameStr.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${name}.png`;
    }
  };
  const getSections = () => {
    const data = [
      {
        title: 'Market Cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24hr',
        data: [coin.volume24],
      },
      {
        title: 'Change 24hr',
        data: [coin.percent_change_24h],
      },
    ];
    return data;
  };

  useEffect(() => {
    props.navigation.setOptions({title: coin.symbol});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.coinIcon}
          source={{uri: getSymbolIcon(coin.name)}}
        />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>
      <View style={styles.sectionList}>
      <SectionList
          sections={getSections()}
          keyExtractor={(item) => item}
          renderItem={({item}) =>
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          }
          renderSectionHeader={({section}) =>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 8,
    color: colors.white,
    textAlign: 'center',
  },
  coinIcon: {
    width: 35,
    height: 35,
  },
  sectionList: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  sectionText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
