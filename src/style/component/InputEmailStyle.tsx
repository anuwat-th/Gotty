import { StyleSheet, } from 'react-native';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

export const Style = (getFont: (name: string) => string) => {
    return StyleSheet.create({
        container: {
            width: unit(416),
            height: 'auto',
            gap:unit(8),
        },
        titleTextContainer: {
            width: unit(416),
            height:unit(32),
            justifyContent:'center',
        },
        titleText:{
            fontFamily:getFont('titleText'),
            fontSize:unit(18),
            color: ColorLightTheme.b8,
        },
        errorMessageTextContainer:{
            width: unit(416),
            height:unit(32),
            justifyContent:'center',
        },
        errorMessageText:{
            fontFamily:getFont('errorMessageText'),
            fontSize:unit(18),
            color: ColorLightTheme.warning,
        },
        inputField: {
            width: unit(416),
            height: unit(64),
            paddingLeft: unit(16),
            borderRadius: unit(14),
            borderWidth: 1,
            fontFamily: getFont('inputField'),
            fontSize: unit(20),
            color: ColorLightTheme.b8,
        },
        inputNoFocus: {
            borderColor: ColorLightTheme.b3,
        },
        inputFocus: {
            borderColor: ColorLightTheme.primary,
        },
        inputError: {
            borderColor: ColorLightTheme.warning,
            backgroundColor:'rgba(255,194,22,0.1)'
        },
    });
};