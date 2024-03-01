import { StyleSheet } from 'react-native';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

const Style = (getFont: (name: string) => string) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: ColorLightTheme.b0,
        },
        titleTextContainer: {
            width: unit(416),
            height: unit(48),
            marginTop: unit(112),
            marginHorizontal: unit(48),
            justifyContent: 'center',
        },
        titleText: {
            fontFamily: getFont('titleText'),
            fontSize: unit(32),
            color: ColorLightTheme.b8,
        },
        emailInputContainer:{
            width: unit(416),
            height: 'auto',
            marginTop:  unit(32),
            marginHorizontal: unit(48),
        },
        continueButtonContainer: {
            width: unit(416),
            height: unit(48),
            marginTop: 'auto',
            marginBottom: unit(48),
            marginHorizontal: unit(48),
        }
    });
}
export default Style;