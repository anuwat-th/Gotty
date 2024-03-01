import { StyleSheet, } from 'react-native';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

export const Style = (getFont: (name: string) => string) => {
    return StyleSheet.create({
        buttonContainer: {
            width: unit(416),
            height: unit(64),
            backgroundColor: ColorLightTheme.b8,
            borderRadius:unit(32),
            alignItems: 'center',
            flexDirection:'row',
        },
        iconContainer:{
            width: unit(32),
            height: unit(32),
            marginLeft:unit(96),
        },
        buttonTextContainer:{
            width: unit(176),
            height: unit(32),
            justifyContent:'center',
            marginLeft:unit(16),
        },
        buttonText: {
            color: ColorLightTheme.b0,
            fontSize: unit(16),
            fontFamily: getFont('buttonText'),
        },
    });
};