import { Platform } from 'react-native'

export const fonts = {
    bold: Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold",
    extraBold: Platform.OS === "ios" ? "Poppins-ExtraBold" : "Poppins-ExtraBold",
    semiBold: Platform.OS === "ios" ? "Poppins-SemiBold" : "Poppins-SemiBold",
    medium: Platform.OS === "ios" ? "Poppins-Medium" : "Poppins-Medium",
    regular: Platform.OS === "ios" ? "Poppins-Regular" : "Poppins-Regular",
    light: Platform.OS === "ios" ? "Poppins-Light" : "Poppins-Light",
}