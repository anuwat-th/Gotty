import { useSelector } from 'react-redux';
import { LanguageState } from '../../redux/reducer/LanguageReducer';

export const translations = {
    titleText: {
        english: `Sign up with Email`,
        thai: `สร้างบัญชีด้วยอีเมล`,
    },
    continueButtonText: {
        english: `Continue`,
        thai: `ต่อไป`
    }
};

export const fonts = {
    titleText: {
        english: 'SatoshiMedium',
        thai: 'IBMPlexSansThaiMedium',
    },
}


export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: { language: LanguageState }) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}

export function getFont<T extends keyof typeof fonts>(fontTitle: T): string {
    const language = useSelector((state: { language: LanguageState }) => state.language.language);
    return (fonts[fontTitle] as Record<string, string>)[language];
}
