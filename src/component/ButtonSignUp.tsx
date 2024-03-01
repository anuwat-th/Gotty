
import React, { } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Style } from '../style/component/ButtonSignUpStyle';
import { getFont } from '../constant/component/ButtonSignUpText';

import GoogleIcon100 from '../asset/svg/GoogleIcon100';
import AppleIcon100 from '../asset/svg/AppleIcon100';

interface ButtonSignUpProps extends TouchableOpacityProps {
    iconName: string;
    title: string;
}

const ButtonSignUp: React.FC<ButtonSignUpProps> = ({ iconName, title, ...rest }) => {

    const style = Style(getFont as any);

    let SvgIcon;
    switch (iconName) {
        case 'Google':
            SvgIcon = GoogleIcon100;
            break;
        case 'Apple':
            SvgIcon = AppleIcon100;
            break;
        default:
            SvgIcon = null;
            break;
    }

    return (
        <TouchableOpacity style={style.buttonContainer} {...rest}>
            <View style={style.iconContainer}>
                {SvgIcon && <SvgIcon size={32} />}
            </View>
            <View style={style.buttonTextContainer}>
                <Text style={style.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default ButtonSignUp;
