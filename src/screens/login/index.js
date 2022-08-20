import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Button, Input, RegisterHeader } from '../../components'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigate = useNavigation()
    const [secureText, setSecureText] = useState(true)

    const hidePassword = () => {
        setSecureText(!secureText)
    }

    return (
        <View style={styles.container} >
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <RegisterHeader title={"Sign In"} />

                <View style={{ marginTop: wd(5) }} >
                    <Text style={styles.heading} >Welcome to</Text>
                    <Text style={styles.text} >Enter your Phone number or Email  </Text>
                    <Text style={styles.text}>for sign in, Or <Text style={styles.subText}>Create new account. </Text></Text>
                </View>

                <View style={{ marginTop: wd(5) }} >
                    <Input placeholder={'Email'} iconName={'email'} />
                    <Input secure={secureText} placeholder={'Password'} iconName={secureText ? 'eye-outline' : 'eye-off-outline'} iconFunc={hidePassword} />
                </View>

                <View style={styles.linkContainer} >
                    <Text onPress={()=>navigate.navigate('fp')} style={styles.links}>Forget Password?</Text>
                </View>
                <View>
                    <Button text={"SIGN IN"} />
                </View>
                <View style={styles.linkContainer} >
                    <Text style={styles.links} >Don’t have account?<Text style={{ color: colors.mainColor }} > Create new account.</Text></Text>
                </View>

                <View style={styles.linkContainer} >
                    <Text style={styles.links} >Or</Text>
                </View>

                <View>
                    <Button iconColor={colors.white} containerStyle={{ backgroundColor: colors.blue }} iconName={"facebook"} text={"Connect with Facebook"} />
                </View>

                <View style={{ marginVertical: wd(5) }} >
                    <Button iconColor={colors.white} containerStyle={{ backgroundColor: colors.lightblue }} iconName={"gmail"} text={"Connect with google"} />
                </View>

            </ScrollView>
        </View>
    )
}

export default Login
