import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { ForgotPassword, Login, Onboarding, PhoneNumber, ResetPassword, Signup, VerficationCode } from '../../screens'
import { colors } from '../../utils';

const Stack = createNativeStackNavigator();

const headerOptions = { headerBackTitleVisible: false, headerTintColor: colors.black, headerStyle: { backgroundColor: colors.white }, headerTransparent: true }

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="fp" component={ForgotPassword} />
            <Stack.Screen name="rp" component={ResetPassword} />
            <Stack.Screen name="pn" component={PhoneNumber} />
            <Stack.Screen name="vc" component={VerficationCode} />
        </Stack.Navigator>
    )
}

export default StackNavigation
