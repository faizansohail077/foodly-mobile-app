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
        // fontSize:16,
        fontFamily: fonts.regular,
        color: colors.gray,
        textAlign:'center'

    },
    inputContainer:{
        marginTop:wd(10)
    },
    inputText:{
        fontSize:wd(4),
        marginBottom:wd(2),
        color:colors.gray
    },
    input:{
        width:wd(100)
    }
    
})

export {
    styles
}