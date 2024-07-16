import { View, Text, Button } from 'react-native'
import React from 'react'

const GoalDetails = ( {navigation, route}) => {

console.log(route);
  return (

    <View>
      <Text>GoalDetails</Text>
      <Text> You are seeing the details of the goal with text : 
        {route.params.passItem.text}
        and id :
        {route.params.passItem.id}
         </Text>

    </View>
  )
}

export default GoalDetails