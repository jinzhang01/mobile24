import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Header from './Header';
import Input from './Input';
import Goalitem from './Goalitem';

export default function Home( {navigation} ) {
  const HomeName = "summer 2024";
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

  function handleDeleteGoal(daletedId) {
    console.log("delete is handled", daletedId);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== daletedId);
    })};

//     function handlePressGoal(pressgoal) {
//       console.log("press is handled", pressgoal);
//       // just use {} to make it a object without defining the key name. a short cut. 
//       navigation.navigate('Details', {pressgoal})
      
//     //   navigation.navigate('Details', {goalobject: pressgoal});
//   }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}> 
        <Header name={HomeName} theme="dark" />
        <Button title="Add a goal" onPress={() => setModalVisible(true)} />
      </View>

      <View style={styles.bottomContainer}>
        <Input 
          inputHandler={handleInputData} 
          isModalVisible={modalVisible} 
          isCancel={handleCancel}
        />

        <FlatList
        renderItem={({item})=>{
          return (
             <Goalitem passItem={item} deleteHandler={handleDeleteGoal}/> 
            // <View style={styles.textContainer}>
            //   <Text style={styles.textStyle}>{item.text}</Text>
            // </View>
          );
        }}
        data={goals}
        />

        {/* <ScrollView horizontal={false}>
          <View style={styles.textContainer}> 
            {goals.map((goalObject) => (
              <Text style={styles.textStyle} key={goalObject.id}>{goalObject.text}</Text>
            ))}
          </View>
        </ScrollView> */}

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