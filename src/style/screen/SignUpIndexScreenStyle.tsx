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
    googleButtonContainer: {
      width: unit(416),
      height: unit(64),
      marginTop: unit(32),
      marginHorizontal: unit(48),
    },
    appleButtonContainer: {
      width: unit(416),
      height: unit(64),
      marginTop: unit(16),
      marginHorizontal: unit(48),
    },
    lineContainer: {
      width: unit(416),
      height: unit(16),
      marginTop: unit(24),
      marginHorizontal: unit(48),
      flexDirection: 'row',
      justifyContent: 'center',
    },
    lineTextContainer: {
      width: unit(16),
      height: unit(16),
      paddingHorizontal: unit(8),
      zIndex: 2,
      justifyContent: 'center',
    },
    lineText: {
      width: 'auto',
      paddingHorizontal: unit(8),
      fontFamily: getFont('lineText'),
      fontSize: unit(16),
      color: ColorLightTheme.b5,
      position: 'absolute',
      backgroundColor: ColorLightTheme.b0,
    },
    line: {
      width: unit(416),
      height: unit(1),
      marginTop: unit(8),
      position: 'absolute',
      backgroundColor: ColorLightTheme.b3,
    },
    continueButtonContainer: {
      width: unit(416),
      height: unit(64),
      marginTop: unit(24),
      marginHorizontal: unit(48),
    }
  });
}
export default Style;