import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Button = ({ onPress,text }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container} >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
