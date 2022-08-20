import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wd } from 'react-native-responsive-screen'
import { colors, fonts } from '../../utils'
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        alignItems: 'center',
        padding: wd(4),
        borderRadius:10,
        
    },
    buttonText:{
        color:colors.white,
        fontSize:wd(4),
        fontFamily:fonts.semiBold
    }
})

export {
    styles
}