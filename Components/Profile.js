import React from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebase/firebaseSetup';

const Profile = () => {
  const userId = auth.currentUser.uid;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Text>ID: {userId}</Text>
    </View>
  );
}

export default Profile;