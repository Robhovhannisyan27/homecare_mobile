import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from '../../utils/helpers/sizes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: widthPercentageToDP('6.4'),
  },
  image: {
    width: widthPercentageToDP('94.7'),
    height: widthPercentageToDP('47.2'),
  },
  servicesContainer: {
    marginTop: widthPercentageToDP('5'),
  },
  subServicesContainer: {
    marginTop: widthPercentageToDP('6.9'),
    marginBottom: widthPercentageToDP('6.4'),
    width: widthPercentageToDP('100'),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 500,
    top: 0,
    left: 0,
    position: 'absolute'
  },

  carouselCotainer: {
    marginTop: widthPercentageToDP('20'),
    borderWidth: 1,
  },
  slide: {
    borderWidth: 1,
    borderRadius: widthPercentageToDP('13') / 2,
    backgroundColor: 'red',
    height: widthPercentageToDP('30'),
  },
  title: {
    fontFamily: 'Sansation-Regular',
    fontSize: widthPercentageToDP('5.4'),
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: widthPercentageToDP('3'),
  },
  text: {
    fontFamily: 'Sansation-Light',
    fontSize: widthPercentageToDP('5.4'),
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: widthPercentageToDP('3'),
  },
});