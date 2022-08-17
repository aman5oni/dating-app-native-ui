import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "react-native";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Home Screen</Text>
    </View>
  );
};
export default Home;
