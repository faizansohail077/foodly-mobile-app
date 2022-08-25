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
        fontSize: wd(7),
        fontFamily: fonts.semiBold,
        color: colors.black,
        marginBottom: wd(2),
        textAlign:'center'
    },
    text: {
        fontSize: wd(3.5),
        fontFamily: fonts.regular,
        color: colors.gray,
        textAlign:'center'

    },
    otpContainer:{
        alignItems:'center'
    },
    
      underlineStyleBase: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.black,
        color:colors.black,
        fontSize:wd(8),
        width:wd(7),
        alignItems:'center'
      },
    
      underlineStyleHighLighted: {
        borderColor: colors.black,
        fontSize:wd(8),
        marginVertical:wd(10),
        alignItems:'center',
        width:wd(20),
      },
      linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:wd(5)
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