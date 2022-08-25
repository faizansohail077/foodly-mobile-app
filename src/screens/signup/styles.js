import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors, fonts } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: hp(100),
        paddingHorizontal: wd(5)
    },
    heading: {
        fontSize: wd(9),
        fontFamily: fonts.semiBold,
        color: colors.black,
        marginBottom: wd(2)
    },
    text: {
        fontSize: wd(3.5),
        // fontSize:16,
        fontFamily: fonts.regular,
        color: colors.gray,
    },
    subText: {
        color: colors.mainColor
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:wd(5)
    },
    orlinkContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:wd(5)
    },
    links: {
        fontSize: wd(3.5),
        color: colors.black,
        fontFamily: fonts.regular
    }
})

export {
    styles
}