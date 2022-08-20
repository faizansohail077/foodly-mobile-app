import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, Input, RegisterHeader } from '../../components'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors } from '../../utils'

const ResetPassword = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <RegisterHeader title={"Forgot Password"} />

            <View style={{ marginTop: wd(5) }} >
                <Text style={styles.heading} >Reset email sent</Text>
                <Text style={styles.text} >We have sent a instructions email to </Text>
                <Text style={styles.text}>Nawfazim@icloud.com. <Text style={{ color: colors.mainColor }} >Having problem?</Text> </Text>
            </View>

            <View style={{ marginTop: wd(5) }} >
                <Input placeholder={'Email'} iconName={'email'} />
            </View>


            <View style={{ marginVertical: wd(5) }} >
                <Button onPress={() => navigation.navigate('rp')} text={"Send again"} />
            </View>


        </View>
    )
}

export default ResetPassword
