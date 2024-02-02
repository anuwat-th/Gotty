import * as Font from 'expo-font';

export const FontLoader = () => Font.loadAsync({
    /* Inter */
    InterRegular: require('../asset/font/Inter-Regular.ttf'),
    InterMedium: require('../asset/font/Inter-Medium.ttf'),
    InterSemiBold: require('../asset/font/Inter-SemiBold.ttf'),
    InterBold: require('../asset/font/Inter-Bold.ttf'),
    /* Satoshi */
    SatoshiLight: require('../asset/font/Satoshi-Light.ttf'),
    SatoshiRegular: require('../asset/font/Satoshi-Regular.ttf'),
    SatoshiMedium: require('../asset/font/Satoshi-Medium.ttf'),
    SatoshiBold: require('../asset/font/Satoshi-Bold.ttf'),
    SatoshirBlack: require('../asset/font/Satoshi-Black.ttf'),
    /* IBM Plex Sans Thai*/
    IBMPlexSansThaiRegular: require('../asset/font/IBMPlexSansThai-Regular.ttf'),
    IBMPlexSansThaiMedium: require('../asset/font/IBMPlexSansThai-Medium.ttf'),
    IBMPlexSansThaiSemiBold: require('../asset/font/IBMPlexSansThai-SemiBold.ttf'),
    IBMPlexSansThaiBold: require('../asset/font/IBMPlexSansThai-Bold.ttf')
});