import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
    console.log(props)
  return (
    <View>
        <Text>welcome to {props.name} app -- hearder component
            
        </Text>
    </View>
  )
}

export default Header