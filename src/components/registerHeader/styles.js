import { Platform, StyleSheet } from 'react-native'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors, fonts } from '../../utils'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS == 'android' ? wd(3) : 0
    },
    heading: {
        fontSize: wd(4),
        fontFamily: fonts.semiBold,
        color: colors.black
    }
})

export {
    styles
}