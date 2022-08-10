

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}

      <Text>Hello {Platform.OS}</Text>
    </NavigationContainer>
  );
};



export default App;
