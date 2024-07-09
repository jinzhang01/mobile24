import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native'

// update Input why my inputHandler is not working instead of props.inputHandler
// answer you can etier props.xx or {xx} to descructure before using it
const Input = ({inputHandler}) => {

const[text, setText] = useState("");
const[isEdited, setEdited] = useState(false);

function handleConfirm(){
  // console.log(text);
  inputHandler(text);
}

  return (
    <View>
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
    <Button title="Submit" onPress={() => handleConfirm()} />
      {/* another second way: function(){handleConfirm()} */}
    </View>
  )
}

export default Input