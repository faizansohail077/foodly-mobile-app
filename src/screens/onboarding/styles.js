import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import {colors, fonts} from '../../utils'
const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        height: '100%',
        alignItems: 'center',
    },

    para: {
        fontSize: widthPercentageToDP(3.5),
        fontFamily: fonts.regular,
        color: colors.gray1
    },
    heading: {
        fontSize: widthPercentageToDP(9),
        marginBottom: widthPercentageToDP(2),
        fontFamily: fonts.semiBold,
        color: colors.black
    }

})
export {
    styles
}
