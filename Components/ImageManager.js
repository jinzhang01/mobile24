import React, { useState, useEffect } from 'react';
import { View, Button, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const ImageManager = () => {
  const [image, setImage] = useState("");
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {

    const checkPermissions = async () => {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== 'granted') {
        alert("Camera access is required to take pictures.");
      }
    };
    // Check permissions if not already granted
    checkPermissions();
  }, []);

  const takeImageHandler = async () => {
    // Directly use status from useCameraPermissions hook
    if (status !== 'granted') {
      // Request permission if not already granted
      const { granted } = await requestPermission();
      if (!granted) {
        alert("You've refused to allow this app to access your camera!");
        return;
      }
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (err) {
      alert('An error occurred while taking the picture!');
      console.log(err);
    }
  };

  return (
    <View >
      <Button title="Pick an image" onPress={takeImageHandler} />
      {/* // Display the image if available */}
      {image && <Image source={{ uri: image }} style={{width:100, height:100}}/>}

    </View>
  );
};

export default ImageManager;