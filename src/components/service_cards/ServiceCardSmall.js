import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from '../../utils/helpers/sizes';
import {WHITE} from '../../utils/constants/colors';

const ServiceCardSmall = props => {
  const Image = props.img;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPressCard}>
      <Image width={widthPercentageToDP('14.13')} height={widthPercentageToDP('11.03')}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    borderRadius: 6,
    marginHorizontal: widthPercentageToDP('1.2'),
    width: widthPercentageToDP('17.87'),
    height: widthPercentageToDP('14.7'),
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ServiceCardSmall;
