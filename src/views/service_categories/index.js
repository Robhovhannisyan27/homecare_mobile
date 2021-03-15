import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  UIManager,
  LayoutAnimation,
  Platform,
  PermissionsAndroid,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./style.js";
import { HCCheckbox } from "../../components/common";
import { connect } from "react-redux";
import { setServiceCategories } from "../../actions";
import Geolocation from "@react-native-community/geolocation";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const changeCategory = (
  checked,
  catKey,
  c,
  setServiceCategories,
  hasChildren
) => {
  let newCategories = { ...c };
  // eslint-disable-next-line no-param-reassign
  newCategories.subServices.forEach((item) =>
    item.key === catKey ? (item.checked = checked) : ""
  );
  hasChildren
    ? (newCategories = newCategories["subServices"][catKey]["children"].map(
        (child) => ({
          ...child,
          checked: checked,
        })
      ))
    : "";
  setTimeout(() => {
    setServiceCategories(newCategories);
  }, 1000);
};

const ServiceCategoriesScreen = (props) => {
  useEffect(() => {
    console.log("asd");
    getUserLocation();
  }, []);
  const getUserLocation = async () => {
    await Geolocation.getCurrentPosition(
      (position) => {
        setPosition(position);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 }
    );
  };
  const { route, setServiceCategories } = props;
  const Image = route.params.image;
  const [index, setIndex] = useState(null);
  const [position, setPosition] = useState(null);
  const [marker_position, setMarkerPosition] = useState({
    lat: 40.1772,
    lng: 44.50349,
  });
  const categories = props.serviceCategoies.subServices;
  const onToggleBox = (i) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    i === index ? setIndex(null) : setIndex(i);
  };
  console.log(position, 112);
  const onSetMarker = (data) => {
    console.log(data.coordinate);
    let position = {
      lat: data.coordinate.latitude,
      lng: data.coordinate.longitude,
    };
    setMarkerPosition(position);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: "100%", height: 500 }}>
        {position && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: position && position.coords.latitude,
              longitude: position && position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            zoomControlEnabled={true}
            onPress={(e) => onSetMarker(e.nativeEvent)}
          >
            <Marker
              coordinate={{
                latitude: marker_position.lat,
                longitude: marker_position.lng,
              }}
              title={"asd"}
              description={"asdd"}
            />
          </MapView>
        )}
      </View>
      <View style={styles.imageContainer}>
        <Image width={styles.image.width} height={styles.image.height} />
      </View>
      <View style={{ width: "90%", marginTop: 40 }}>
        {categories.map(({ key, text, checked, children }, i) => {
          return (
            <HCCheckbox
              title={text}
              checked={checked}
              onToggleBox={onToggleBox}
              catKey={key}
              active_index={index}
              changeCategory={(isChecked, catKey, hasChildren) =>
                changeCategory(
                  isChecked,
                  catKey,
                  props.serviceCategoies,
                  setServiceCategories,
                  hasChildren
                )
              }
              i={i}
              key={i}
            >
              {children}
            </HCCheckbox>
          );
        })}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({ servicesData }) => ({
  serviceCategoies: servicesData.serviceCategoies, // should be opened
});

export default connect(
  mapStateToProps,
  { setServiceCategories }
)(ServiceCategoriesScreen);
