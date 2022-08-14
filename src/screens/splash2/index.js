import { View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { logo } from '../../../assets/Img'
import { colors } from '../../utils'

const Splash2 = () => {
    const navigate = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigate.navigate("onboarding")
        }, 1000);
    }, [])

    return (
        <View style={styles.container} >

            <View style={styles.topRight} />

            <View style={{ alignSelf: 'center' }} >
                <SvgXml xml={logo(colors.mainColor, colors.white, colors.black)} />
            </View>

            <View style={styles.bottomleft} />

        </View>
    )
}

export default Splash2
