import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({ onPress, text, containerStyle,iconName,iconColor }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.container, containerStyle]} >
            <Icon name={iconName} size={30} color={iconColor} />
            <Text style={styles.buttonText}>{text}</Text>
            <View style={styles.buttonText} />
        </TouchableOpacity>
    )
}

export default Button
