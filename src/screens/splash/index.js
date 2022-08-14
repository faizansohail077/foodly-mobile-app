import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import { logo } from '../../../assets/Img'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils'

const Spalsh = () => {
    const navigate = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigate.navigate("splash2")
        }, 1000);
    },[])

    return (
        <View style={styles.container} >
            <SvgXml xml={logo(colors.white, colors.mainColor, colors.white)} />
        </View>
    )
}

export default Spalsh
