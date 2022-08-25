import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Button, Input, RegisterHeader } from '../../components'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
    const navigate = useNavigation()
    const [secureText, setSecureText] = useState(true)

    const hidePassword = () => {
        setSecureText(!secureText)
    }

    return (
        <View style={styles.container} >
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <RegisterHeader title={"Create Account"} />

                <View style={{ marginTop: wd(5) }} >
                    <Text style={styles.heading} >Create Account</Text>
                    <Text style={styles.text} >Enter your Name, Email and Password</Text>
                    <Text style={styles.text}>for sign up, Or <Text onPress={()=>navigate.navigate('login')} style={styles.subText}>Already have account?</Text></Text>
                </View>

                <View style={{ marginTop: wd(5) }} >
                    <Input placeholder={'Full Name'} iconName={'email'} />
                    <Input placeholder={'Email'} iconName={'email'} />
                    <Input secure={secureText} placeholder={'Password'} iconName={secureText ? 'eye-outline' : 'eye-off-outline'} iconFunc={hidePassword} />
                </View>

                <View style={styles.linkContainer} >
                    <Text onPress={()=>navigate.navigate('fp')} style={styles.links}>Forget Password?</Text>
                </View>
                <View>
                    <Button onPress={()=>navigate.navigate('pn')} text={"SIGN UP"} />
                </View>
                <View style={styles.linkContainer} >
                    <Text onPress={()=>navigate.navigate('login')} style={styles.links} >Already have account?<Text style={{ color: colors.mainColor }} > Log In.</Text></Text>
                </View>

                <View style={styles.orlinkContainer} >
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

export default Signup
