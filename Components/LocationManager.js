import { View, Button, Text, Image } from 'react-native'; // Import the Image component
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'; // Import the Location module from expo-location
import { mapsApiKey } from '@env';
import { Dimensions } from 'react-native';



const LocationManager = () => {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState(null);

  async function verifyPermissions() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return false;
    }
    return true;
  }

  const locationHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        alert('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Button title="Find my location" onPress={locationHandler} />
      {location && (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`
            }}
          />
        </View>
      )}
    </View>
  );
};

export default LocationManager;