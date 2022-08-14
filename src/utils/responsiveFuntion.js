import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"

const wd = (v) => {
    return widthPercentageToDP(v)
}

const hp = (v) => {
    return heightPercentageToDP(v)
}
export {
    wd,
    hp
}