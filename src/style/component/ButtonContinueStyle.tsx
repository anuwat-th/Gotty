import { StyleSheet, } from 'react-native';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

export const Style = (getFont: (name: string) => string) => {
    return StyleSheet.create({
        buttonContainer: {
            width: unit(416),
            height: unit(64),
            borderRadius: unit(32),
            borderWidth: unit(1),
            borderColor: ColorLightTheme.b3,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: ColorLightTheme.b8,
            fontSize: unit(20),
            fontFamily: getFont('buttonText'),
        },
    });
};