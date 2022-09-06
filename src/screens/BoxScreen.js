import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  //content border padding margin
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "flex-end",
    // flexDirection: "row",
    height: 200,
    // justifyContent: "space-around",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    // marginVertical: 20,
    // marginHorizontal: 20, //margin: 20 if both
    // margin: 20,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    // alignSelf: "flex-start",
    flex: 1,
    fontSize: 30,
    // top: 20,
    // five properties are eqvivalent to  ...StyleSheet.absoluteFillObject
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    //
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
    flex: 1,
  },
});

export default BoxScreen;
