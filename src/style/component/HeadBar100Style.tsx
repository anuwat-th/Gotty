import { StyleSheet, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { unit } from '../../helper/Unit';
import ColorLightTheme from '../../theme/ColorLightTheme';

export const Style = () => {
    const insets = useSafeAreaInsets();
    const topInset = insets.top;

    return StyleSheet.create({
        container: {
            width: unit(512),
            height: unit(64),
            backgroundColor: ColorLightTheme.b0,
            position: 'absolute',
            top: topInset,
            left: 0,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex:100,
        },
        buttonContainer: {
            width: unit(48),
            height: unit(48),
            borderRadius: unit(12),
            backgroundColor: ColorLightTheme.primary,
            marginLeft: unit(16),
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconTheme100Container: {
            width: unit(64),
            height: unit(64),
            marginLeft: unit(160),
        }
    });
};