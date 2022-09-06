import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  //   const friends = [
  //     { name: "Friend 1", key: "1" },
  //     { name: "Friend 2", key: "2" },
  //     { name: "Friend 3", key: "3" },
  //     { name: "Friend 4", key: "4" },
  //     { name: "Friend 5", key: "5" },
  //     { name: "Friend 6", key: "6" },
  //     { name: "Friend 7", key: "7" },
  //     { name: "Friend 8", key: "8" },
  //     { name: "Friend 9", key: "9" },
  //   ];
  const friends = [
    { name: "Friend 1", age: 12 },
    { name: "Friend 2", age: 12 },
    { name: "Friend 3", age: 12 },
    { name: "Friend 4", age: 32 },
    { name: "Friend 5", age: 12 },
    { name: "Friend 6", age: 64 },
    { name: "Friend 7", age: 12 },
    { name: "Friend 8", age: 32 },
    { name: "Friend 9", age: 12 },
  ];
  return (
    <FlatList
      //   horizontal={true}
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name} // or separate key in array obj
      data={friends}
      // renderItem={(element) => {
      // element === { item: {name: 'Friend 1}, index:0}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age : {item.age}
          </Text>
        ); //item === {name: 'Friend 1'}
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginLeft: 20,
  },
});

export default ListScreen;
