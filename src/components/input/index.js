import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';
import { colors } from '../../utils';

const Input = ({ iconName, placeholder, secure, iconFunc }) => {
    const inputRef = useRef(null)

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current.focus()} style={styles.container} >
            <TextInput ref={inputRef} secureTextEntry={secure} style={styles.inputText} placeholder={placeholder} placeholderTextColor={'rgba(0,0,0,0.5)'} />
            <Icon onPress={iconFunc} name={iconName} size={wd(6)} color={colors.black} />
        </TouchableOpacity>
    )
}

export default Input