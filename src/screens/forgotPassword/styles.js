import { StyleSheet } from 'react-native'
import { widthPercentageToDP  as wd ,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors, fonts } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: hp(100),
        paddingHorizontal: wd(5)
    },
    heading: {
        fontSize: wd(9),
        fontFamily: fonts.medium,
        color: colors.black,
        marginBottom: wd(2)
    },
    text: {
        fontSize: wd(3.5),
        // fontSize:16,
        fontFamily: fonts.regular,
        color: colors.gray,
    },
})

export {
    styles
}