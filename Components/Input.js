import { View, Text, TextInput, StyleSheet, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native'

// update Input why my inputHandler is not working instead of props.inputHandler
// answer you can etier props.xx or {xx} to descructure before using it
const Input = ({inputHandler, isModalVisible, isCancel}) => {

const[text, setText] = useState("");
const[isEdited, setEdited] = useState(false);

function handleConfirm(){
  // console.log(text);
  inputHandler(text);
}

  return (
    <Modal animationType="slide" visible={isModalVisible}> 
    <View style={styles.container}>
    <TextInput 
    autoFocus={true} 
    // secureTextEntry={true}
 
    value={text}
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    placeholder="Type here to start!"
    // onChangeText={text => setText(text)}
    
    onChangeText ={function(changedText){
      setText(changedText);
      setEdited(false);}}
  
      // console.log(text)
      // console.log(setText)
    onBlur = {() => {setEdited(true);}}
    
    />

    <Text>you typed: {text}</Text>
    {isEdited ? <Text>Thank You</Text> : null}
      <View style={styles.bottonContainer}> 
      <View style={styles.button}>
        <Button title="Cancel" onPress={() => {
          isCancel();
          setText("")}
          } />
      </View>

      <View style={styles.button}>
        <Button title="Submit" onPress={() => {
          handleConfirm();
          setText("")}
        } />
        {/* another second way: function(){handleConfirm()} */}
      </View>
      </View>



    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // without it everything will be on the left. But it will be strached. 
    alignItems: 'center',
    // without it everything will be on the top
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    color: 'white',
    fontSize: 20,
    width: "30%",
    margin: 30
  },
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%"
  }
});

export default Input