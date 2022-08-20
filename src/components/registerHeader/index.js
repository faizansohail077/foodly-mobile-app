import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgXml } from 'react-native-svg'
import { back } from '../../../assets/Img'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const RegisterHeader = ({title }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={()=>navigation.goBack()} >
                <SvgXml xml={back(wd(7), wd(7))} />
            </TouchableOpacity>
            <Text style={styles.heading} >{title}</Text>
            <View style={{ paddingHorizontal: 10 }} />
        </View>
    )
}

export default RegisterHeader
