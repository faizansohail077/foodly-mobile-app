import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgXml } from 'react-native-svg'
import { onboard1, onboard2, onboard3 } from '../../../assets/Img'
// import Swiper from 'react-native-swiper'
import { heightPercentageToDP as hp, } from 'react-native-responsive-screen'


const data = [
    { id: 0, img: onboard1, heading: 'Order Your Food', para1: 'Now you can order your food ', para2: 'anytime from your mobile.' },
    { id: 1, img: onboard2, heading: 'Safe Food Transfer', para1: 'We maintain safety and cleanliness', para2: 'while preparing your food.' },
    { id: 2, img: onboard3, heading: 'Fast Delivery', para1: 'We deliver your food immediately', para2: ' at your doorsteps.' },
]


const Onboarding = () => {
    return (
        <View style={{ flex: 1 }} >
            <View style={{ height: hp(20) }}>
                <Text>   123</Text>
            </View>

            <View style={{ height: hp(70) }} >
                {/* <Swiper onIndexChanged={(e) => console.log(e, 'eee')} activeDotStyle={{ width: 15 }} style={styles.wrapper}>
                    {data?.map((item) => {
                        return (
                            <View key={item?.id} style={styles.slide}>
                                <View style={styles.imageContainer} >
                                    <SvgXml style={{ height: '100%' }} xml={item.img()} />
                                </View>
                                <Text style={styles.heading} >{item?.heading}</Text>
                                <Text style={styles.para}>{item?.para1}</Text>
                                <Text style={styles.para}>{item?.para2}</Text>
                            </View>
                        )
                    })}
                </Swiper> */}
            </View>
        </View>
    )
}

export default Onboarding
