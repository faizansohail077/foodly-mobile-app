import { StyleSheet } from "react-native"
import { heightPercentageToDP } from "react-native-responsive-screen"
import { colors } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        alignItems: 'center',
        height: heightPercentageToDP(100),
        justifyContent:'center'

    }
})

export { styles }