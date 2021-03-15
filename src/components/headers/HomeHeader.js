import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import {widthPercentageToDP} from '../../utils/helpers/sizes';
import {WHITE, ORANGE} from '../../utils/constants/colors';
import {PromoList} from '../promo_list';
import {LogoIcon} from '../../assets/icons';
import {BOLD} from '../../utils/constants/fonts';

export const HomeHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoIcon width={widthPercentageToDP('7.13')} height={widthPercentageToDP('6.6')}/>
        <Text style={styles.logoText}>HouseCare</Text>
      </View>
      <PromoList data={props.data}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight+widthPercentageToDP('2.4'),
    height: widthPercentageToDP('70.27'),
    backgroundColor: ORANGE,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginLeft: widthPercentageToDP('4.26'),
  },
  logoText: {
    marginLeft: widthPercentageToDP('2.5'),
    fontFamily: BOLD,
    fontSize: widthPercentageToDP('5'),
    color: WHITE,
  },
});
