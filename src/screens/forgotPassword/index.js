import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Button, Input, RegisterHeader } from '../../components'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <RegisterHeader title={"Forgot Password"} />

            <View style={{ marginTop: wd(5) }} >
                <Text style={styles.heading} >Forgot password</Text>
                <Text style={styles.text} >Enter your email address and we will</Text>
                <Text style={styles.text}>send you a reset instructions.</Text>
            </View>

            <View style={{ marginTop: wd(5) }} >
                <Input placeholder={'Email'} iconName={'email'} />
            </View>


            <View style={{ marginVertical: wd(5) }} >
                <Button onPress={() => navigation.navigate('rp')} text={"Reset password"} />
            </View>


        </View>
    )
}

export default ForgotPassword
