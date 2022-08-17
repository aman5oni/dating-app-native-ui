import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "react-native";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Profile Screen</Text>
    </View>
  );
};
export default Profile;
