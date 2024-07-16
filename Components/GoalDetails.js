import { View, Text } from 'react-native'
import React from 'react'

const GoalDetails = ( {navigation, route}) => {

console.log(route);
  return (
    <View>
      <Text>GoalDetails</Text>
      <Text> You are seeing the details of the goal with text 
        {route.params.goalobject.text}
        : and id :
        {route.params.goalobject.id}
         </Text>
    </View>
  )
}

export default GoalDetails