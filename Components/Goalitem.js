import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Goalitem = ({passItem}) => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{passItem.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default Goalitem