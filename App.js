

import React from 'react';
import {
  Text, Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { fonts } from './src/utils/typo';

const App = () => {
  return (
    <NavigationContainer>
      <Text>Hello {Platform.OS}</Text>
    </NavigationContainer>
  );
};



export default App;
