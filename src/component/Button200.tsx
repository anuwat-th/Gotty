import React, { } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Style } from '../style/component/Button200Style';
import { getFont } from '../constant/component/Button200Text';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const Button200: React.FC<ButtonProps> = ({ title, ...rest }) => {

    const style = Style(getFont as any);

    return (
        <TouchableOpacity style={style.buttonContainer} {...rest}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};
export default Button200;
