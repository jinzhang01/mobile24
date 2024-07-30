import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Components/GoalDetails";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseSetup"; // Ensure this path is correct

const Stack = createNativeStackNavigator();

const App = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isUserAuthenticated ? "Home" : "Login"}
        screenOptions={{
          headerStyle: { backgroundColor: "darkmagenta" },
          headerTintColor: "white",
        }}
      >
        {isUserAuthenticated ? (
          // Authenticated users see the AppStack
          <>
            <Stack.Screen name="Home" component={Home} options={{ title: "All Goals" }} />
            <Stack.Screen name="Details" component={GoalDetails} />
          </>
        ) : (
          // Unauthenticated users see the AuthStack
          <>
            <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: "Signup" }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;