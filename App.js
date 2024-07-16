import { View, Text } from 'react-native';
import React from 'react';
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './Components/GoalDetails';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
console.log(Stack);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={
          { headerStyle: { backgroundColor: "darkmagenta" }, 
            headerTintColor: "white"
          }
        }
        >
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
}

export default App;