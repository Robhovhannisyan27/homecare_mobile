import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { widthPercentageToDP } from "../../utils/helpers/sizes";
import { WHITE, ORANGE, GREY, LIGHT_GREY } from "../../utils/constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { REGULAR } from "../../utils/constants/fonts";

export const HCCheckbox = (props) => {
  // const [isSelected, setSelection] = useState(false);
  const {
    i,
    onToggleBox,
    active_index,
    title,
    children,
    checked,
    changeCategory,
    catKey,
  } = props;
  console.log(i, active_index);

  return (
    //onToggleBox-y petqa ashxati children-i het. ete true-a apa uxxaki bacuma, ete false-a checkbox-y checked-a darnum....bayc yerevi
    <View
      style={{
        ...styles.container,
        backgroundColor: checked ? ORANGE : WHITE,
        paddingBottom: active_index === i ? widthPercentageToDP("2") : null,
      }}
    >
      <TouchableOpacity style={styles.header} onPress={() => onToggleBox(i)}>
        <View style={styles.titleContainer}>
          <CheckBox
            value={checked}
            onValueChange={() => changeCategory(!checked, catKey)}
            tintColors={{ true: WHITE, false: ORANGE }} // should be checked for ios
            style={styles.checkbox}
          />
          <Text style={{ ...styles.title, color: checked ? WHITE : GREY }}>
            {title}
          </Text>
        </View>
        {children ? (
          <Icon
            name={active_index === i ? "ios-arrow-down" : "ios-arrow-forward"}
            color={checked ? WHITE : ORANGE}
            size={widthPercentageToDP("4")}
          />
        ) : null}
      </TouchableOpacity>
      {active_index === i
        ? children.map(({ checked, text }, ind) => (
            <View style={styles.checkboxesContainer} key={ind}>
              <View style={styles.checkboxInContainer}>
                <CheckBox
                  value={checked}
                  // onValueChange={setSelection}
                  tintColors={{ true: WHITE, false: ORANGE }}
                  style={styles.checkbox}
                />
                <Text
                  style={{ ...styles.title, color: checked ? WHITE : GREY }}
                >
                  {text}
                </Text>
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    color: "#FBC55C",
  },
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
    marginLeft: widthPercentageToDP("1"),
    textTransform: "capitalize",
    fontFamily: REGULAR,
    fontSize: widthPercentageToDP("3.73"),
  },
  checkboxesContainer: {
    paddingLeft: widthPercentageToDP("9"),
  },
  checkboxInContainer: {
    flexDirection: "row",
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
