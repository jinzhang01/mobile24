import { View, Button, Text } from 'react-native'; // Import the Text component
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'; // Import the Location module from expo-location

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
        </View>
      )}
    </View>
  );
};

export default LocationManager;