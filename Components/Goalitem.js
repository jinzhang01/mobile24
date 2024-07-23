import { View, Text, StyleSheet, Button, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import PressableButton from './PressableButton';
import { AntDesign } from '@expo/vector-icons';


const Goalitem = ({passItem, deleteHandler, pressHandler}) => {
  const {id, text} = passItem;
  const navigation = useNavigation();

  return (
    <View style={styles.textContainer}>
      <Pressable
      // add android_ripple to make the pressable effect 
        android_ripple={{color: 'pink'}}

        style={({pressed}) => {
          // it pass in a object, so needs to be destructured.
          console.log("press:", pressed);
          // to put 2 styles together, use array.
          return [styles.pressable, pressed && styles.pressedStyle]
         
        }}
        onPress={()=>navigation.navigate('Details', {passItem})}
      >
        <Text style={styles.textStyle}>{text}</Text>
        
        {/* <Button color="red" title="x" onPress={()=>deleteHandler(id)}/>  */}
        <PressableButton 
        componentStyle = {styles.buttonStyle}
        pressedFunction={()=>deleteHandler(id)}>
          <AntDesign name="delete" size={24} color="black" />
        </PressableButton> 

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
  pressedStyle: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
  buttonStyle: {
    marginleft:10,
    backgroundColor: 'darkgrey',
  }
})

export default Goalitem