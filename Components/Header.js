import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {

    // console.log(props.children)
  return (
    <View>
        <Text>welcome to {props.name} app -- hearder component
            {props.children}
            
        </Text>
    </View>
  )
}

export default Header