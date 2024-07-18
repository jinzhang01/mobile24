import { View, Text, StyleSheet, Button, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Goalitem = ({passItem, deleteHandler, pressHandler}) => {
  const {id, text} = passItem;
  const navigation = useNavigation();

  return (
    <View style={styles.textContainer}>
      <Pressable
        style={styles.pressable}
        onPress={()=>navigation.navigate('Details', {passItem})}
      >
        <Text style={styles.textStyle}>{text}</Text>
        
        <Button color="red" title="x" onPress={()=>deleteHandler(id)}/> 

        {/* <Button color="black" title="i" onPress={()=>navigation.navigate('Details', {passItem})
          //pass the goal object. 
        }/> */}


        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
textContainer: {
    backgroundColor: 'lightblue',
    marginVertical: 10,
    borderRadius: 10,
    
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 24, 
    marginVertical: 5,
    margin: 10
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'lightblue',
    padding: 10, 
  },
})

export default Goalitem