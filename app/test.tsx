import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ThemedComponent = () => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트 테스트</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ThemedComponent;
