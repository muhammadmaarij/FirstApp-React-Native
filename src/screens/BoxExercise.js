import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxExercise = () => {
  //content border padding margin
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    height: 250,
    justifyContent: "space-between",
  },
  viewOneStyle: {
    backgroundColor: "green",
    height: 100,
    width: 90,
  },
  viewTwoStyle: {
    backgroundColor: "blue",
    fontSize: 30,
    // ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 90,
    // left: 10,
    // marginTop: 100,
    alignSelf: "flex-end", //or top: 100
  },
  viewThreeStyle: {
    backgroundColor: "yellow",
    height: 100,
    width: 90,
    // left: 20,
  },
});

export default BoxExercise;
