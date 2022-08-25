import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Button, Input, RegisterHeader } from '../../components'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import OtpInputs from 'react-native-otp-inputs';

import { colors } from '../../utils'

const VerficationCode = () => {
    const navigate = useNavigation()
    return (
        <View style={styles.container} >
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <RegisterHeader title={"Login to Foodly"} />

                <View style={{ marginTop: wd(5) }} >
                    <Text style={styles.heading} >Verify phone number</Text>
                    <Text style={styles.text} >Enter the 4-Digit code sent to you at</Text>
                    <Text style={styles.text}> +1501333982</Text>
                </View>

                <View style={styles.otpContainer} >

                    <OtpInputs
                        pinCount={4}
                        numberOfInputs={4}
                        handleChange={(code) => console.log(code)}

                        // focusStyles={styles.underlineStyleBase}
                        inputContainerStyles={styles.underlineStyleHighLighted}
                        inputStyles={styles.underlineStyleBase}
                    // codeInputFieldStyle={styles.underlineStyleBase}
                    // codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    />
                </View>
                <View>
                    <Button text={"Continue"} />
                </View>

                <View style={styles.linkContainer} >
                    <Text onPress={() => navigate.navigate('login')} style={styles.links} >Didn’t receive code?
                        <Text style={{ color: colors.mainColor }} > Resend Again.</Text></Text>
                </View>

                <View style={{ alignItems: 'center' }} >
                    <Text style={{ fontSize: wd(4), color: colors.gray }}>
                        By Signing up you agree to our Terms
                    </Text>
                    <Text style={{ fontSize: wd(4), color: colors.gray }}> Conditions & Privacy Policy.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default VerficationCode


