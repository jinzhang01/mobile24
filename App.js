import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import React, { useState } from 'react';
import Input from './Components/Input';
import { Button, SafeAreaView } from 'react-native';

export default function App() {
  const appName = "summer 2024";

  const [receivedText, setReceivedText] = useState("start");
  const [modalVisible, setModalVisible] = useState(false);
  
  function handleInputData(data){
    console.log("input is handled", data);
    setReceivedText(data);
    // hide the modal -- the function is passed to the child component
    // when the button is clicked
    // the data get passed to the parent component above 
    // and at the same time the setModalVisible is called to hide the modal
    setModalVisible(false);
  } 

  function handleCancel(){
    setModalVisible(false);
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topContainer}> 
      <Header name={appName} theme="dark">
        {/* add child component */}
        {/* <Text>child component1 \n</Text>
        <Text>child component2 \n</Text> */}
      </Header> 

      <Button title="Add a goal" onPress={() => {
        setModalVisible(true);
      }} />

      </View>

      <View style={styles.bottomContainer}>
      <Input inputHandler={handleInputData} isModalVisible={modalVisible} isCancel={handleCancel}/>

        <Text style={styles.textStyles}> {receivedText}</Text>

      <StatusBar style="auto" />
      
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    color: 'red',
    fontSize: 20
  },

  topContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  bottomContainer: {
    flex: 4,
    backgroundColor: 'yellow',
    alignItems: 'center',
  }
});
