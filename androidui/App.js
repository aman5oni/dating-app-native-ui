import React from "react";
import Discussion from "./src/screens/Discussion";
import BottomTabNavigator from "./src/navigations/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Chat" component={BottomTabNavigator} />
        <Stack.Screen name="Discussion" component={Discussion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
