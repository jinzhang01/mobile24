import { View, Text } from 'react-native'
import React from 'react'
import Home from './Components/Home'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
       <Home />
    </NavigationContainer>
  )
}

export default App