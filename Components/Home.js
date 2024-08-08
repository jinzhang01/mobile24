import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native';
import Header from './Header';
import Input from './Input';
import Goalitem from './Goalitem';
import PressableButton from './PressableButton';
import { writeToDb } from '../firebase/firestoreHelper';
import { collection, onSnapshot, query, where } from 'firebase/firestore'; 
import { database } from '../firebase/firebaseSetup';
import {deleteFromDb} from '../firebase/firestoreHelper';
import { auth } from '../firebase/firebaseSetup'; 
import LocationManager from './LocationManager';




export default function Home( {navigation} ) {

  const HomeName = "summer 2024";
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const q = query(
      collection(database, 'goals'),
      where("owner", "==", auth.currentUser.uid)
    );
  
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newGoals = [];
      if (!querySnapshot.empty) {
        querySnapshot.forEach((docSnapshot) => {
          console.log(docSnapshot.data());
          // Add each document's data to the newGoals array
          newGoals.push({ ...docSnapshot.data(), id: docSnapshot.id });
        });
      }
      setGoals(newGoals);
    });
  
    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);


  

  function handleInputData(data) {
    console.log("input is handled", data);
    const newGoal = { text: data, owner:auth.currentUser.uid };
    writeToDb(newGoal, 'goals');


    // setGoals((currentGoals) => [...currentGoals, newGoal]);
    setModalVisible(false);
  } 

  // call writeToDB function from firebase/firestoreHelper.js
  // 
  


  function handleCancel() {
    console.log("cancel is handled");
    setModalVisible(false);
  }

  function handleDeleteGoal(daletedId) {
    console.log("delete is handled", daletedId);
    deleteFromDb(daletedId, 'goals');

    // setGoals((currentGoals) => {
    //   return currentGoals.filter((goal) => goal.id !== daletedId);
    // }
  };





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
        {/* <Button title="Add a goal" onPress={() => setModalVisible(true)} /> */}
        <PressableButton pressedFunction={() => setModalVisible(true)}>
          <Text style={styles.buttonStyle}> Add a goal </Text>
        </PressableButton>

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

        <Button title="Go to profile" onPress={() => navigation.navigate('Profile')} />

          <LocationManager />


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
    justifyContent: 'center',
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
  buttonStyle: {
    fontSize: 30, 
    backgroundColor: 'darkgrey',
  }

});