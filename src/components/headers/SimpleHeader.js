import React, { useEffect, useLayoutEffect } from 'react';
import {View, StyleSheet, StatusBar, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP} from '../../utils/helpers/sizes';
import {BLUE, WHITE, ORANGE, GREY, BLACK, LIGHT_GREY} from '../../utils/constants/colors';
import { PromoList } from '../promo_list';
import { LogoIcon } from '../../assets/icons';
import { BOLD, REGULAR } from '../../utils/constants/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation }  from '@react-navigation/native';

export const SimpleHeader = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
        <Icon name="ios-arrow-round-back" color={BLACK} size={widthPercentageToDP('9')}/>
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.rightItemContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: LIGHT_GREY,
    paddingTop: StatusBar.currentHeight,
    height: widthPercentageToDP('17.1'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: REGULAR,
    fontSize: widthPercentageToDP('4.53'),
    lineHeight: widthPercentageToDP('5.33'),
    letterSpacing: -widthPercentageToDP('0.1'),
    color: GREY,
    textAlign: 'center',
  },
  backButtonContainer: {
    left: widthPercentageToDP('2.93'),
    alignSelf: 'center',
  },
  rightItemContainer: {
    width: widthPercentageToDP('9'),
  }
});
