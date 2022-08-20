import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Onboarding, Signup} from '../../screens'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default StackNavigation
