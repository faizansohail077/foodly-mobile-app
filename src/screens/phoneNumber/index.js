import { ScrollView, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import { Button, Input, RegisterHeader } from '../../components'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import PhoneInput from "react-native-phone-number-input";

const Phonenumber = () => {
    const navigate = useNavigation()
    const [value, setValue] = useState("");
    const phoneInput = useRef(null);
    return (
        <View style={styles.container} >
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <RegisterHeader title={"Login to Foodly"} />

                <View style={{ marginTop: wd(5) }} >
                    <Text style={styles.heading} >Get started with Foodly</Text>
                    <Text style={styles.text} >Enter your phone number to use foodly</Text>
                    <Text style={styles.text}> and enjoy your food :)</Text>
                </View>

                <View style={styles.inputContainer} >
                    <Text style={styles.inputText}>Phone Number</Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="PK"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        // onChangeFormattedText={(text) => {
                        //     setFormattedValue(text);
                        // }}
                        withDarkTheme
                        withShadow
                        autoFocus
                        containerStyle={styles.input}
                    />
                </View>
                <View style={{ marginTop: wd(30) }} >
                    <Button onPress={() => navigate.navigate('vc')} text={"SIGN UP"} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Phonenumber
