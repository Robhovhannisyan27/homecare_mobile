import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { widthPercentageToDP } from "../../utils/helpers/sizes";
import { WHITE, ORANGE, GREY, LIGHT_GREY } from "../../utils/constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { REGULAR } from "../../utils/constants/fonts";
import { useNavigation } from "@react-navigation/native";

export const HCBox = (props) => {
  const { item, index, onToggleBox, active_index } = props;
  const Image = item.icon;
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        ...styles.container,
        paddingBottom: active_index === index ? widthPercentageToDP("1") : null,
      }}
    >
      <TouchableOpacity style={styles.header} onPress={onToggleBox}>
        <View style={styles.titleContainer}>
          <Image />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Icon
          name={active_index === index ? "ios-arrow-down" : "ios-arrow-forward"}
          color={ORANGE}
          size={widthPercentageToDP("4")}
        />
      </TouchableOpacity>
      {active_index === index ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.text}</Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() =>
              navigate("ServiceCategories", {
                title: item.title,
                image: Image,
              })
            }
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 6,
    minHeight: widthPercentageToDP("14.7"),
    marginHorizontal: widthPercentageToDP("5.86"),
    marginVertical: widthPercentageToDP("1.1"),
    backgroundColor: WHITE,
    justifyContent: "center",
  },
  header: {
    minHeight: widthPercentageToDP("14.7"),
    paddingHorizontal: widthPercentageToDP("4.8"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginLeft: widthPercentageToDP("2.13"),
    textTransform: "capitalize",
    fontFamily: REGULAR,
    fontSize: widthPercentageToDP("3.73"),
    color: GREY,
  },
  textContainer: {
    paddingHorizontal: widthPercentageToDP("4.8"),
    alignItems: "center",
  },
  text: {
    textAlign: "justify",
    fontFamily: REGULAR,
    fontSize: widthPercentageToDP("3.2"),
    color: LIGHT_GREY,
  },
  nextButton: {
    backgroundColor: ORANGE,
    width: "100%",
    height: widthPercentageToDP("9"),
    borderRadius: 20,
    marginVertical: widthPercentageToDP("3"),
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    textAlign: "justify",
    fontFamily: REGULAR,
    fontSize: widthPercentageToDP("4"),
    color: WHITE,
  },
});
