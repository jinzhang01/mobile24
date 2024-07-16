import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'


const Goalitem = ({passItem, deleteHandler}) => {
  const {id, text} = passItem;
  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{text}</Text>
        
        <Button color="red" title="x" onPress={()=>deleteHandler(id)}/> 
    </View>
  )
}


const styles = StyleSheet.create({
textContainer: {
    backgroundColor: 'lightblue',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10, 
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 90, 
    marginVertical: 5,
    margin: 10
  }
})

export default Goalitem