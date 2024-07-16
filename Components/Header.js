import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Header = (props) => {

    // console.log(props.children)
  return (
    <View>
        <Text style={styles.header}>welcome to {props.name} app -- hearder component
            {props.children}
            
        </Text>
    </View>
  )
}

// add header some style 
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    borderColor: 'purple',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default Header