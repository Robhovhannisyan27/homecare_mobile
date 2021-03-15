import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from '../../utils/helpers/sizes';
import { useNavigation }  from '@react-navigation/native';
import { LIGHT_BLUE, WHITE } from '../../utils/constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export const ServiceHeader = props => {
  const {goBack} = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => goBack()} style={styles.backButtonContainer}>
          <Icon color={WHITE} name="arrowleft" size={widthPercentageToDP('7')} />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image resizeMethod='resize' style={styles.image} source={props.image} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 20,
    backgroundColor: LIGHT_BLUE,
    height: widthPercentageToDP('38'),
    borderBottomLeftRadius: widthPercentageToDP('6'),
    borderBottomRightRadius: widthPercentageToDP('6'),
    elevation: 10,
  },
  topContainer: {
    marginTop: widthPercentageToDP(2),
  },
  imageContainer: {
    marginTop: widthPercentageToDP('6'),
    borderWidth: 3,
    borderColor: WHITE,
    width: widthPercentageToDP('31'),
    height: widthPercentageToDP('31'),
    borderRadius: widthPercentageToDP('31')/2,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  backButtonContainer: {
    alignItems: 'center',
    width: widthPercentageToDP('15'),
  },
  image: {
    width: widthPercentageToDP('30'),
    height: widthPercentageToDP('30'),
    borderRadius: widthPercentageToDP('30')/2,
  },
  title: {
    alignSelf: 'center',
    marginTop: -widthPercentageToDP('7.5'),
    fontSize: widthPercentageToDP('7'),
    fontFamily: 'Sansation-Regular',
    color: WHITE,
  }
});
