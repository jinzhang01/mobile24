import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import Header from './Components/Header';
import Input from './Components/Input';

export default function App() {
  const appName = "summer 2024";
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  function handleInputData(data) {
    console.log("input is handled", data);
    const newGoal = { text: data, id: Math.random().toString() };
    setGoals((currentGoals) => [...currentGoals, newGoal]);
    setModalVisible(false);
  } 

  function handleCancel() {
    console.log("cancel is handled");
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}> 
        <Header name={appName} theme="dark" />
        <Button title="Add a goal" onPress={() => setModalVisible(true)} />
      </View>

      <View style={styles.bottomContainer}>
        <Input 
          inputHandler={handleInputData} 
          isModalVisible={modalVisible} 
          isCancel={handleCancel}
        />

        <ScrollView horizontal={false}>
          <View style={styles.textContainer}> 
            {goals.map((goalObject) => (
              <Text style={styles.textStyle} key={goalObject.id}>{goalObject.text}</Text>
            ))}
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
  },
  textContainer: {
    backgroundColor: 'lightblue',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10, 
  },
  textStyle: {
    fontSize: 90, 
    marginVertical: 5,
    margin: 10
  },

});