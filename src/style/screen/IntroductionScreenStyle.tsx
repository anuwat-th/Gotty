import { StyleSheet } from 'react-native';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

const Style = (getFont: (name: string) => string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ColorLightTheme.primary,
    },
    /* Render Flatlist */
    heroBackground: {
      width: unit(512),
      height: unit(1024),
    },
    actionContainer: {
      width: unit(512),
      height: unit(512),
      backgroundColor: ColorLightTheme.b0,
      position: 'absolute',
      bottom: unit(-80),
      borderTopRightRadius: unit(64),
      borderTopLeftRadius: unit(64),
    },
    dashDotContainer: {
      width: unit(40),
      height: unit(8),
      marginTop: unit(8),
      marginHorizontal: unit(236),
    },
    slideTitleContainer: {
      width: unit(416),
      height: unit(64),
      marginTop: unit(16),
      marginHorizontal: unit(48),
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideTitleText: {
      fontFamily: getFont('sildeTitleText'),
      color: ColorLightTheme.secondaryVariant,
      fontSize: unit(32),
    },
    slideDescriptionContainer: {
      width: unit(416),
      height: unit(64),
      marginTop: unit(16),
      marginHorizontal: unit(48),
      justifyContent: 'center',
    },
    slideDescriptionText: {
      fontFamily: getFont('slideDescriptionText'),
      textAlign: 'center',
      color: ColorLightTheme.b8,
      fontSize: unit(18),
    },
    primaryButtonContainer:{
      width:unit(416),
      height:unit(64),
      marginTop: unit(32),
      marginHorizontal: unit(48),
    },
    secondaryButtonContainer:{
      width:unit(416),
      height:unit(64),
      marginTop: unit(16),
      marginHorizontal: unit(48),
    }
  });
}
export default Style;