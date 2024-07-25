import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addDoc } from 'firebase/firestore';



const GoalUsers = ({itemId, route}) => {


  const[users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUserData() {
      try {
        //the patter  a promise insidem async outside. 
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        console.log("response:", response.ok);

        if (!response.ok) {
          throw new Error('the request was not sucessful');
        }
        // josn returns a promise so need to await it.
        const data = await response.json();

        // write this to firebase, assign to a specific goal 
        data.forEach(element => {
          console.log("element:", element);
          if (route.params) {
            writeToDb(element, `goals/${itemId}/users`);
          }
        });

        console.log("data:", data);
        setUsers(data);

      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <View>
      <Text>GoalUsers</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          // console.log("item:", item),
          <Text>{item.name}</Text>
        )}
        />
    </View>
  );
};

export default GoalUsers;