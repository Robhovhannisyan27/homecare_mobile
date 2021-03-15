import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { widthPercentageToDP } from '../../utils/helpers/sizes';
import { BACKGROUND_WHITE } from '../../utils/constants/colors';
import ServiceCard from './ServiceCard';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { setService, setSubServices } from '../../actions';

function renderItem({ item }, { data, setService, setSubServices }, navigate) {
  return (
    <ServiceCard
      text={item.title}
      img={item.image}
      onPressCard={() =>
        navigateAndSetService(item, data, navigate, setService, setSubServices)
      }
    />
  );
}

const navigateAndSetService = (item, data, navigate, setService, setSubServices) => {
  setService(item.title);
  // should be opened
  // getSubServices(item.title).then((resp) => {
  //   setSubServices(resp);
  // });
  navigate('Service', {
    title: item.title,
    image: item.image,
    services: data,
  });
};

const ServiceCards = props => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        contentContainerStyle={styles.listContainer}
        style={styles.serviceCards}
        data={props.data}
        renderItem={item => renderItem(item, props, navigate)}
        keyExtractor={item => item.title}
        numColumns={2}
        extraData={props}
      />
    </View>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setService: () => dispatch({type: 'setService'}),
//   };
// };

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     chosenService: 'tttt',
//   };
// };

export default connect(
  null,
  { setService, setSubServices },
)(ServiceCards);

const styles = StyleSheet.create({
  container: {
    marginTop: -widthPercentageToDP('13'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: BACKGROUND_WHITE,
  },
  listContainer: {
    alignItems: 'center',
    alignContent: 'space-between',
    paddingBottom: widthPercentageToDP('2.5'),
  },
  serviceCards: {
    marginTop: -widthPercentageToDP('6.4'),
  },
});
