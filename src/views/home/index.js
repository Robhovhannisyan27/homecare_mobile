import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { ServiceCards, HomeHeader } from '../../components';
import { BACKGROUND_WHITE } from '../../utils/constants/colors';
import {
  HomeCleaningIcon,
  DryCleaningIcon,
  HouseWarmingIcon,
  GardenCleaningIcon,
  OfficeCleaningIcon,
  WindowCleaningIcon,
} from '../../assets/icons';
import { connect } from 'react-redux';
import { setServices } from '../../actions';

const services = [
  {
    title: 'Home Cleaning',
    image: HomeCleaningIcon,
  },
  {
    title: 'Dry Cleaning',
    image: DryCleaningIcon,
  },
  {
    title: 'House\n Warming/Moving',
    image: HouseWarmingIcon,
  },
  {
    title: 'Garden\n Cleaning/Work',
    image: GardenCleaningIcon,
  },
  {
    title: 'Office Cleaning',
    image: OfficeCleaningIcon,
  },
  {
    title: 'Window Cleaning',
    image: WindowCleaningIcon,
  },
];

const promos = [
  {
    title: 'Invite your friends and get promocod with 13.33% discount',
    background_color: 'rgba(240, 226, 226, 0.46)',
  },
  {
    title: 'Test 1234',
    background_color: 'rgba(143, 255, 0, 0.32);',
  },
];

const HomeScreen = ({ setServices }) => {
  useEffect(() => {
    setServices(services);
  });
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{ backgroundColor: BACKGROUND_WHITE }}>
      <HomeHeader data={promos} />
      <ServiceCards data={services} />
    </ScrollView>
  );
};

export default connect(
  null,
  { setServices },
)(HomeScreen);
