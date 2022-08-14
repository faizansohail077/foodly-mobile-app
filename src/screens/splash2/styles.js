import { StyleSheet } from "react-native"
import { colors, hp, wd } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        height: hp(100),
        justifyContent:'space-between'

    },
    topRight: {
        backgroundColor: colors.secondaryColor,
        height: hp(30),
        width: wd(60),
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 1000
    },
    bottomleft: {
        backgroundColor: colors.secondaryColor,
        height: hp(30),
        width: wd(60),
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        borderTopRightRadius: 300
    }
})

export { styles }