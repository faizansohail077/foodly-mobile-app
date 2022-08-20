import { Platform, StyleSheet } from 'react-native'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.offwhite,
        paddingHorizontal: Platform.OS == 'ios' ? wd(5) : wd(3),
        height: wd(12),
        borderRadius: wd(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:wd(5)
    },
    inputText: {
        fontSize: wd(4),
        width:'90%',
        color: colors.black,

    }
})

export {
    styles
}