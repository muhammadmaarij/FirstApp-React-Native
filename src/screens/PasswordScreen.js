import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none" //iOS
        autoCorrect={false} //iOS
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length <= 5 ? (
        <Text>Password must be longer than 5</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default PasswordScreen;
