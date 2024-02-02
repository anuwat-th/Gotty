import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, G, Rect } from 'react-native-svg';

const DashDot1: React.FC = () => {

    return (
        <View style={{ flex: 1 }}>
            <Svg height="100%" width="100%" viewBox="0 0 400 80" fill="none">
                <G >
                    <Rect width="160" height="80" rx="40" fill="#C81D25" />
                    <Circle cx="240" cy="40" r="40" fill="#E8E8E9" />
                    <Circle cx="360" cy="40" r="40" fill="#E8E8E9" />
                </G>
            </Svg>
        </View>
    );
};

export default DashDot1;
