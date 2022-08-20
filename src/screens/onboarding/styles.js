import { Platform, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wd } from "react-native-responsive-screen";
import { colors, fonts } from '../../utils'


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height:hp(100),
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    onBoardingcontainer: {
        height:Platform.OS == 'android'? hp(75):hp(65),
        backgroundColor: 'white',
    },

    slide: {
        height: '100%',
        width: wd(100),
        alignItems: 'center',
        
    },
    para: {
        fontSize: wd(3.5),
        fontFamily: fonts.regular,
        color: colors.gray,
        textAlign: 'center'

    },
    heading: {
        fontSize: wd(9),
        marginTop: wd(5),
        marginBottom: wd(2),
        fontFamily: fonts.semiBold,
        color: colors.black,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: wd(5),
        marginHorizontal: wd(5),
    }
})
export {
    styles
}
