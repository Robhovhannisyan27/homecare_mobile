import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP} from '../../utils/helpers/sizes';
import { BOLD } from '../../utils/constants/fonts';

export const PromoCode = props => {
  return (
    <TouchableOpacity style={{...styles.container, backgroundColor: props.backgroundColor}}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP('79'),
    height: widthPercentageToDP('29.6'),
    borderRadius: 22,
    marginHorizontal: widthPercentageToDP('3'),
    justifyContent: 'center',
  },
  text: {
    width: widthPercentageToDP('51'),
    marginLeft: widthPercentageToDP('2.93'),
    alignSelf: 'flex-start',
    fontFamily: BOLD,
    fontSize: widthPercentageToDP('4.8'),
    lineHeight: 25,
  },
});
