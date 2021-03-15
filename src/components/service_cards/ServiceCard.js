import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from '../../utils/helpers/sizes';
import { WHITE, MILKY, GREY } from '../../utils/constants/colors';
import { LIGHT } from '../../utils/constants/fonts';

const ServiceCard = props => {
  const Image = props.img;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPressCard}>
      <View style={styles.iconContainer}>
        <Image />
      </View>
      <Text style={styles.cardText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 15,
    marginHorizontal: widthPercentageToDP('2'),
    marginBottom: widthPercentageToDP('2.67'),
    width: widthPercentageToDP('38.13'),
    height: widthPercentageToDP('45.33'),
    backgroundColor: WHITE,
    alignItems: 'center'
  },
  iconContainer: {
    width: widthPercentageToDP('26.7'),
    height: widthPercentageToDP('26.7'),
    borderRadius: widthPercentageToDP('26.7') / 2,
    marginTop: widthPercentageToDP('4'),
    marginBottom: widthPercentageToDP('2.67'),
    backgroundColor: MILKY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    color: GREY,
    fontSize: widthPercentageToDP('3.73'),
    fontFamily: LIGHT,
    textAlign: 'center'
  },
});

export default ServiceCard;
