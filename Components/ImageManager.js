import React, { useState } from 'react';
import { View, Button, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageManager = () => {
  const [image, setImage] = useState(null);



  const takeImageHandler = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (err) {
      alert('An error occurred while taking the picture!');
      console.log(err);
    }
  };

  return (
    <View >
      <Button title="Pick an image" onPress={takeImageHandler} />

    </View>
  );
};

export default ImageManager;