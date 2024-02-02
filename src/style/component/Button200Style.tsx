import { StyleSheet, } from 'react-native';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

export const Style = (getFont: (name: string) => string) => {
    return StyleSheet.create({
        buttonContainer: {
            width: unit(416),
            height: unit(64),
            backgroundColor: ColorLightTheme.b0,
            borderWidth:unit(1),
            borderBlockColor:ColorLightTheme.b7,
            borderRadius: unit(32),
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: ColorLightTheme.b7,
            fontSize: unit(20),
            fontFamily: getFont('buttonText'),
        },
    });
};