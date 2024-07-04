import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header';
import React, { useState } from 'react';

export default function App() {
  const appName = "summer 2024";
  const[text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        {/* add child component */}
        <Text>child component1 \n</Text>
        <Text>child component2 \n</Text>
      </Header> 

      <Text>welcome to {appName} app -- App component

      </Text>

      <TextInput  
        value={text}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder="Type here to start!"
        // onChangeText={text => setText(text)}
        onChangeText ={function(changedText){
          setText(changedText);
          // console.log(text)
          // console.log(setText)
        }}
        

      />

      <Text>you typed: {text}</Text>

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
