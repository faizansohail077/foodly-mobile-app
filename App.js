

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView forceInset={{ top: 'always', bottom: 'never' }} style={{ flex: 1 }} >
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};



export default App;
