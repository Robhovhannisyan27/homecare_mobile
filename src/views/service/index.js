import React, { useState } from 'react';
import {
  View,
  ScrollView,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native';
import styles from './style.js';
import { ServiceCardsHorizontal, SubServices } from '../../components';
import {
  FullCleaningIcon,
  PartialCleaningIcon,
  CleaningAfterRepairIcon,
} from '../../assets/icons';
import { connect } from 'react-redux';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const data = [
  {
    title: 'Full Cleaning',
    text: 'Full Cleaning is the process of removing unwanted substances, such as dirt, infectious agents, and other impurities, from an object or environment. Cleaning occurs in many different contexts, and uses many different methods. Several occupations are devoted to cleaning.',
    icon: FullCleaningIcon,
  },
  {
    title: 'Partial Cleaning',
    text: 'Partial Cleaning is the process of removing unwanted substances, such as dirt, infectious agents, and other impurities, from an object or environment.',
    icon: PartialCleaningIcon,
  },
  {
    title: 'Cleaning after Repairing',
    text: 'test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum',
    icon: CleaningAfterRepairIcon,
  },
];

export const ServiceScreen = props => {
  const { route } = props;
  const Image = route.params.image;
  const { services, title } = route.params;
  const [index, setIndex] = useState(null);

  const onToggleIndex = ind => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    ind === index ? setIndex(null) : setIndex(ind);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image width={styles.image.width} height={styles.image.height} />
      </View>
      <View style={styles.servicesContainer}>
        <ServiceCardsHorizontal
          data={services}
          current_service={title}
        />
      </View>
      <View style={styles.subServicesContainer}>
        <SubServices
          data={data} // this row should be deleted, will get subservices from store
          active_index={index}
          onToggleIndex={onToggleIndex}
        />
      </View>
    </ScrollView>
  );
};

export default ServiceScreen;
