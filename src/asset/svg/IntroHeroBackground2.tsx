import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

const IntroHeroBackground2 = () => {
    return (

        <View style={{ flex: 1 }}>
            <Svg height="100%" width="100%" viewBox="0 0 512 1024">
                <Defs>
                    <LinearGradient id="linear-gradient" x1={200.65} y1={494.7} x2={200.65} y2={986.51} gradientUnits="userSpaceOnUse">
                        <Stop offset="0" stopColor="#bfd7ea" />
                        <Stop offset="0.32" stopColor="#d5aab8" />
                        <Stop offset="0.78" stopColor="#f37078" />
                        <Stop offset="1" stopColor="#ff5a5f" />
                    </LinearGradient>
                    <LinearGradient id="linear-gradient-2" x1={200.65} y1={46.7} x2={200.65} y2={538.51} gradientUnits="userSpaceOnUse">
                        <Stop offset="0" stopColor="#ff5a5f" />
                        <Stop offset="0.55" stopColor="#de363d" />
                        <Stop offset="1" stopColor="#c81d25" />
                    </LinearGradient>
                    <LinearGradient id="linear-gradient-3" x1={375.35} y1={91.53} x2={375.35} y2={455.34} gradientUnits="userSpaceOnUse">
                        <Stop offset="0" stopColor="#ffc216" />
                        <Stop offset="0.42" stopColor="#e6771c" />
                        <Stop offset="0.81" stopColor="#d03622" />
                        <Stop offset="1" stopColor="#c81d25" />
                    </LinearGradient>
                </Defs>
                <Path fill="url(#linear-gradient)" d="M382.56,513.44h0c-24.99-24.99-65.52-24.99-90.51,0L0,805.49v181.02l382.56-382.56c24.99-24.99,24.99-65.52,0-90.51Z" />
                <Path fill="url(#linear-gradient-2)" d="M382.56,65.44h0c-24.99-24.99-65.52-24.99-90.51,0L0,357.49v181.02L382.56,155.95c24.99-24.99,24.99-65.52,0-90.51Z" />
                <Path fill="url(#linear-gradient-3)" d="M512,91.53l-254.56,254.56c-24.99,24.99-24.99,65.52,0,90.51h0c24.99,24.99,65.52,24.99,90.51,0l164.05-164.05V91.53Z" />

            </Svg>
        </View>
    );
};

export default IntroHeroBackground2;
