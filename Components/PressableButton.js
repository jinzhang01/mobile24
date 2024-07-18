import { View, Pressable } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const PressableButton = ({ children, pressedFunction, componentStyle }) => {
  return (
    <Pressable onPress={pressedFunction} style={({ pressed }) => {

        // the componentStyle is passed from the parent component, which could override the defaultStyle.
        // the order here is very imporant
        return [styles.defaultStyle, componentStyle, pressed && styles.pressedStyle];
      }}>
      <View>
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    defaultStyle:
    {
        marginleft:10,
        backgroundColor: 'cyan',
    },

  pressedStyle: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
});

export default PressableButton;