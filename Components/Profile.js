import React from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebase/firebaseSetup';
import { Button } from 'react-native';

const Profile = () => {
  const userId = auth.currentUser.uid;
  
  function signOut (navigation) {
    auth.signOut().then(() => {
      console.log("User signed out");
    //   navigation.navigation("Login");
    }).catch((error) => {
      console.error("Error signing out:", error);
    });}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Text>ID: {userId}</Text>

      <Button title="Sign out" onPress={() => signOut()} />
    </View>

  );
}

export default Profile;