import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Input = () => {
const[text, setText] = useState("");
const[isEdited, setEdited] = useState(false);

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
    </View>
  )
}

export default Input