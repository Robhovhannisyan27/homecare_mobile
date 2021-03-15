import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ServiceCardSmall from '../ServiceCardSmall';
import { widthPercentageToDP } from '../../../utils/helpers/sizes';
import { BACKGROUND_WHITE, GREY } from '../../../utils/constants/colors';
import { useNavigation } from '@react-navigation/native';
import { REGULAR, BOLD } from '../../../utils/constants/fonts';
import { setService, setSubServices } from '../../../actions';
import { connect } from 'react-redux';

const renderItem = ({ item }, { data, setService, setSubServices }, navigate) => {
  return (
    <ServiceCardSmall
      img={item.image}
      onPressCard={() =>
        navigateAndSetService(item, data, navigate, setService, setSubServices)
        // navigate('Service', { title: item.title, image: item.image, services: data })
      }
    />
  );
};

const navigateAndSetService = (item, data, navigate, setService, setSubServices) => {
  setService(item.title);
  // should be opened
  // getSubServices(item.title).then((resp) => { //sranc story petqa arvi pushov, voriny get exav save lini storeum arrayi mej
  //   setSubServices(resp);
  // });
  navigate('Service', {
    title: item.title,
    image: item.image,
    services: data,
  });
};


const ServiceCardsHorizontal = props => {
  const { data, current_service } = props;
  const { navigate } = useNavigation();
  let active_services = data.filter(item => item.title !== current_service);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.listContainer}
        data={active_services}
        renderItem={(item) => renderItem(item, props, navigate)}
        keyExtractor={item => item.title}
        extraData={props}
      />
    </View>
  );
};

export default connect(
  null,
  { setService, setSubServices },
)(ServiceCardsHorizontal);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: widthPercentageToDP('25.5')
  },
  title: {
    fontFamily: BOLD,
    fontSize: widthPercentageToDP('4.8'),
    lineHeight: widthPercentageToDP('5.6'),
    color: GREY,
    paddingHorizontal: widthPercentageToDP('5.86'),
  },
  listContainer: {
    marginTop: widthPercentageToDP('3'),
    paddingHorizontal: widthPercentageToDP('4.66'),
  },
});
