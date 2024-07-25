import { View, Text, Button } from 'react-native'
import React, { useState, useEffect }  from 'react'
import {updateDocInDb} from '../firebase/firestoreHelper';
import GoalUsers from './GoalUsers';


const GoalDetails = ( {navigation, route}) => {
const [textColor, setTextColor] = useState("black");

useEffect(() => {
    navigation.setOptions({
      title: route.params.passItem.text,
      headerRight: () => (
        <Button
          title="Warning"
          onPress={() => {
            // update the document in the database.
            updateDocInDb(route.params.passItem.id, 'goals');
            setTextColor('red'); 
            navigation.setOptions({ title: 'Warning!' }); 
          }}
        />
      ),
    });
  }, [navigation]);

  // if warning button is pressed 
  // update item to has the warning True or setDoc (merge true)

console.log(route);
  return (

    <View >
      <Text  style={{ color: textColor }}> You are seeing the details of the goal with text : 
        {route.params.passItem.text}
        and id :
        {route.params.passItem.id}
         </Text>

         <GoalUsers />

    </View>
  )
}

export default GoalDetails