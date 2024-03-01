import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Style } from '../style/component/ButtonContinueStyle';
import { getFont } from '../constant/component/ButtonContinueText';


interface ButtonContinuProps extends TouchableOpacityProps {
    title: string;
}

const ButtonContinue: React.FC<ButtonContinuProps> = ({ title, ...rest }) => {

    const style = Style(getFont as any);

    return (
        <TouchableOpacity style={style.buttonContainer} {...rest}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};
export default ButtonContinue;
