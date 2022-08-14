import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Onboarding, SpalshScreen, SplashScreen2 } from '../../screens'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="splash" component={SpalshScreen} />
            <Stack.Screen name="splash2" component={SplashScreen2} />
            <Stack.Screen name="onboarding" component={Onboarding} />
        </Stack.Navigator>
    )
}

export default StackNavigation
