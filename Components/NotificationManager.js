import { View, Button } from 'react-native';
import React from 'react';
import * as Notifications from 'expo-notifications';

async function verifyPermission() {
  const response = await Notifications.getPermissionsAsync();
  console.log(response);
  if (response.granted) {
    return true;
  }
  // If we don't have permission, let's ask for it
  const permissionResponse = await Notifications.requestPermissionsAsync();
  return permissionResponse.granted;
}

const NotificationManager = () => {
  async function scheduleNotification() {
    try {
      const hasPermission = await verifyPermission();
      if (hasPermission) {
        console.log('Permission granted');
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'You have a goal to add',
            body: 'Please add a goal to your list',
          },
          trigger: {
            seconds: 1,
          },
        });
      } else {
        console.log('Permission not granted');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Button title="Remind me to add a goal" onPress={scheduleNotification} />
    </View>
  );
}

export default NotificationManager;