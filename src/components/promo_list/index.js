import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {widthPercentageToDP} from '../../utils/helpers/sizes';
import {PromoCode} from './PromoCode';

function renderItem({item}, props) {
  const {navigation} = props;
  return (
    <PromoCode text={item.title} backgroundColor={item.background_color} navigation={navigation}/>
  )
}

export const PromoList = props => {
  return (
    <FlatList
      horizontal={true}
      bounces={false}
      contentContainerStyle={styles.container}
      data={props.data}
      renderItem={(item) => renderItem(item, props)}
      keyExtractor={item => item.title}
      extraData={props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentageToDP('7'),
    marginTop: widthPercentageToDP('2.67'),
  },
});
