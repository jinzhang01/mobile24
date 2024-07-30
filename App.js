import { View, Text } from "react-native";
import React from "react";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Components/GoalDetails";
import { Button } from "react-native";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const Stack = createNativeStackNavigator();
console.log(Stack);
// include the new added login and signup components

// change the mobile app to have two stack with auth and home
// the auth stack will have login and signup
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName=""
        screenOptions={{
          headerStyle: { backgroundColor: "darkmagenta" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            title: "Signup",
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "Login",
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "All Goals",
            // headerStyle: { backgroundColor: "darkmagenta" },
            // headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          // options={({ route }) => ({
          // title: route.params.passItem.text,
          // headerRight: () => (
          //   // set options method
          //   <Button title="Warning" onPress={() => alert("test")} />
          // )
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
