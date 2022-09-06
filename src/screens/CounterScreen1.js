import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state === {counter : number}
  // action === { type: 'increment' || 'decrement', payload: not necessary in this case}
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.payload }; //state.counter + 1 also possible
    case "Decrease":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen1 = () => {
  //   //todo: fix this
  //   let counter = 0;

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: -1 });
        }}
        //state.counter
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen1;
