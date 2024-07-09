import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import React, { useState } from 'react';
import Input from './Components/Input';
import { Button } from 'react-native';

export default function App() {
  const appName = "summer 2024";

  const [receivedText, setReceivedText] = useState("start");
  const [modalVisible, setModalVisible] = useState(false);
  
  function handleInputData(data){
    console.log("input is handled", data);
    setReceivedText(data);
    // hide the modal -- Does not understand!!!
    setModalVisible(false);
  } 


  return (
    <View style={styles.container}>
      <Header name={appName} theme="dark">
        {/* add child component */}
        {/* <Text>child component1 \n</Text>
        <Text>child component2 \n</Text> */}
      </Header> 

      {/* <Text>welcome to {appName} app -- App component
      </Text> */}


      <Input inputHandler={handleInputData} isModalVisible={modalVisible}/>

        <Text> {receivedText}</Text>

      <StatusBar style="auto" />
      
      <Button title="Add a goal" onPress={() => {
        setModalVisible(true);
      }} />

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
