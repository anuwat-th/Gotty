import React from "react";
import { TouchableOpacity, View } from "react-native";
import { TouchableProps } from "react-native-svg";

import ColorLightTheme from "../theme/ColorLightTheme";
import Icon100 from "../asset/svg/Icon100";
import IconTheme100 from "../asset/svg/IconTheme100";

import { Style } from "../style/component/HeadBar100Style";

interface HeadBar100Props extends TouchableProps { }

const HeadBar100: React.FC<HeadBar100Props> = ({ ...rest }) => {
    const style = Style();
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.buttonContainer} {...rest}>
                <Icon100 iconName={'ArrowBack'} fill={1} color={ColorLightTheme.b0} size={32}></Icon100>
            </TouchableOpacity>
            <View style={style.iconTheme100Container}>
                <IconTheme100 size={64} />
            </View>
        </View>
    );
}

export default HeadBar100;