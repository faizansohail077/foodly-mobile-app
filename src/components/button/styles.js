import { Platform, StyleSheet } from 'react-native'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors, fonts } from '../../utils'
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        alignItems: 'center',
        padding: Platform.OS =='ios'? wd(4): wd(2),
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonText:{
        color:colors.white,
        fontSize:wd(4),
        fontFamily:fonts.semiBold,
        textAlign:'center',
        paddingHorizontal:10
    }
})

export {
    styles
}