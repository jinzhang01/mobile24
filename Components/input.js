import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const[text, setText] = useState("");
const Input = () => {
  return (
    <View>
    <TextInput>  
    value={text}
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    placeholder="Type here to start!"
    // onChangeText={text => setText(text)}
    onChangeText ={function(changedText){
      setText(changedText);
      // console.log(text)
      // console.log(setText)
    }}
    </TextInput>
        <Text>you typed: {text}</Text>
    </View>
  )
}

export default Input