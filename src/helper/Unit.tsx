import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

export const unit = (inputValue: number): number => {
    return wp((inputValue * (1 / 5.12)) + '%');
};
