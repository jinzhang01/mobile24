import { View, Text, TextInput, StyleSheet, Modal, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native'

// update Input why my inputHandler is not working instead of props.inputHandler
// answer you can etier props.xx or {xx} to descructure before using it
const Input = ({inputHandler, isModalVisible, isCancel}) => {

const[text, setText] = useState("");
const[isEdited, setEdited] = useState(false);
const [isDisabled, setDisabled] = useState(true);

function handleConfirm(){
  // console.log(text);
  inputHandler(text);
  setDisabled(text.length != 0)
  setText("")
}

//add the function handle cancel
function handleCancel(){
  setDisabled(text.length != 0)
  setText("")
  isCancel();
}

  return (
    <Modal animationType="slide" visible={isModalVisible} transparent={true}> 
      <View style={styles.modelBackgroud}>
        <View style={styles.container}>

          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png' }} alt="goal web" style={styles.imageStyle}/>
          <Image source={require('../res/goal.png')} alt="goal local" style={styles.imageStyle}/>

          <TextInput 
            autoFocus={true} 
            // secureTextEntry={true}
            value={text}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Type here to start!"
            // onChangeText={text => setText(text)} 
            onChangeText ={function(changedText){
              setText(changedText);
              setEdited(false);
              setDisabled(text.length === 0)
            }
            }
          
              // console.log(text)
              // console.log(setText)
            onBlur = {() => {setEdited(true);}}
            
          />

          <Text>you typed: {text}</Text>
          {isEdited ? <Text>Thank You</Text> : null}

          <View style={styles.bottonContainer}> 
            <View style={styles.button}>
              <Button title="Cancel" onPress={() => {
                handleCancel();
                }} />
            </View>
            <View style={styles.button}>
              <Button disabled={isDisabled} title="Confirm" onPress={() => {
                handleConfirm();
                }} />
              {/* another second way: function(){handleConfirm()} */}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    // without it everything will be on the left. But it will be strached. 
    alignItems: 'center',
    // without it everything will be on the top
    justifyContent: 'center',
    padding: 10
  },
  button: {
    backgroundColor: 'lightblue',
    color: 'black',
    fontSize: 20,
    width: "35%",
    margin: 10
  },
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%"
  },
  modelBackgroud: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default Input