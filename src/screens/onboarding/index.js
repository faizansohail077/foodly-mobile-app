import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgXml } from 'react-native-svg'
import { onboard1, onboard2, onboard3 } from '../../../assets/Img'
import { heightPercentageToDP as hp, widthPercentageToDP as wd, } from 'react-native-responsive-screen'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../utils'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'


const data = [
    { id: 0, img: onboard1, heading: 'All your favorites', para1: 'Order from the best local restaurants', para2: 'with easy, on-demand delivery.' },
    { id: 1, img: onboard2, heading: 'Free delivery offers', para1: 'Free delivery for new customers via Apple', para2: 'Pay and others payment methods.' },
    { id: 2, img: onboard3, heading: 'Choose your food', para1: 'Easily find your type of food craving and', para2: 'you’ll get delivery in wide range.' }
]

const Onboarding = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.onBoardingcontainer}>
                <SwiperFlatList
                    data={data}
                    showPagination
                    paginationActiveColor={colors.mainColor}
                    paginationStyleItem={{ width: wd(3), height: wd(2) }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.slide}>
                                <SvgXml xml={item?.img()} />
                                <Text style={styles.heading}>{item?.heading}</Text>
                                <Text style={styles.para}>{item?.para1}</Text>
                                <Text style={styles.para}>{item?.para2}</Text>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={styles.buttonContainer} >
                <Button text={'Get Started'} onPress={() => navigation.navigate('signup')} />
            </View>

        </View>
    )
}

export default Onboarding
