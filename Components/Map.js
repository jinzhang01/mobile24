import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handlePress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log(latitude, longitude);
    setSelectedLocation({ latitude, longitude });
  };

  const confirmLocation = () => {
    if (selectedLocation) {
      console.log('Location confirmed:', selectedLocation);
    } else {
      console.log('No location selected');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handlePress}
      >
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation}
            title="Selected Location"
            description={`Latitude: ${selectedLocation.latitude}, Longitude: ${selectedLocation.longitude}`}
          />
        )}
      </MapView>
      <Button title="Confirm Location" onPress={confirmLocation} disabled={!selectedLocation}/>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});