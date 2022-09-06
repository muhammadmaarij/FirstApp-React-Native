import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  //   const greeting = "Hi Th";
  //   greeting = 123;
  //   const greeting = ["asd", "asdd"];
  const greeting = <Text>Hello to you111</Text>;
  const secondText = "Maarij";
  return (
    <View>
      <Text style={styles.textStyle}>Thisss is the components screen</Text>
      <Text>Hi There!</Text>
      {/* <Text>{greeting}</Text> */}
      {greeting}
      <Text style={{ fontSize: 25 }}>Getting started with React native!</Text>
      <Text style={styles.textStyle}>My name is {secondText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
