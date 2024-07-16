import { View, Text } from 'react-native'
import { Button } from 'react-native'
import React from 'react'

const GoalDetails = ( {navigation, route}) => {

console.log(route);
  return (

    <View>
      <Text>GoalDetails</Text>
      <Text> You are seeing the details of the goal with text : 
        {route.params.pressgoal.text}
        and id :
        {route.params.pressgoal.id}
         </Text>
            {/* // need to add a condiftional reading here 
         <Button title="more details" onPress={()=>{navigation.push("Details")}}/> */}
    </View>
  )
}

export default GoalDetails