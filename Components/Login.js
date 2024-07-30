import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseSetup'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define a function to handle the login process using Firebase
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        console.log("Login successful:", userCredential.user);
        navigation.replace("Home"); // Navigate to the home screen after login
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login failed:", errorCode, errorMessage);
        Alert.alert("Login Failed", errorMessage); // Show user-friendly error message
      });
  };

  // Define a function to navigate to the Signup screen
  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        keyboardType="email-address"
        placeholder="Enter your email"
        autoCapitalize="none"
        onChangeText={setEmail}  // Update the state here
      />

      <Text>Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        secureTextEntry={true} // This hides the password as it is entered
        placeholder="Enter your password"
        autoCapitalize="none"
        onChangeText={setPassword}  // Update the state here
      />

      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={navigateToSignup} />
    </View>
  );
};

export default Login;