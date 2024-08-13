import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./Components/GoalDetails";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseSetup";
import Profile from "./Components/Profile";
import Map from "./Components/Map";
import * as Notifications from 'expo-notifications';


const Stack = createNativeStackNavigator();



const App = () => {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);


// Notifications
useEffect(() => {
  const subscription = Notifications.addNotificationReceivedListener(
    (notification) => {
      console.log('notification received: ', notification.request.content.data.url);
    }
  );
  return () => subscription.remove;
}, []);

Notifications.setNotificationHandler({
  handleNotification: async (notification) => {
    return { shouldShowAlert: true };
  },
});

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
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Map" component={Map} />
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