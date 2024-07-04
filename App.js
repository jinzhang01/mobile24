import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';
import React, { useState } from 'react';
import Input from './Components/Input';

export default function App() {
  const appName = "summer 2024";


  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        {/* add child component */}
        {/* <Text>child component1 \n</Text>
        <Text>child component2 \n</Text> */}
      </Header> 

      <Text>welcome to {appName} app -- App component

      </Text>

      <Input />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
