import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseSetup';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  // Define a function to handle the sign-up process
  const handleSignUp = () => {
    if (password1 !== password2) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password1)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User registered:", user);
        // Optionally navigate to home or another screen
        navigation.replace("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error signing up: ${errorMessage}`); // Display a user-friendly error message
      });
  };

  // Define a function to handle navigation back to the login screen
  const handleGoToLogin = () => {
    navigation.replace("login");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Sign Up</Text>
      
      <Text>Email</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        keyboardType="email-address"
        placeholder="Enter your email"
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={setPassword1}
      />

      <Text>Confirm Password</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        secureTextEntry={true}
        placeholder="Confirm your password"
        onChangeText={setPassword2}
      />

      <Button
        title="Register"
        onPress={handleSignUp}
      />
      <Button
        title="Back to Login"
        onPress={handleGoToLogin}
      />
    </View>
  );
};

export default Signup;