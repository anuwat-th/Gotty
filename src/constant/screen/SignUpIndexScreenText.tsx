import { useSelector } from 'react-redux';
import { LanguageState } from '../../redux/reducer/LanguageReducer';

export const translations = {
    titleText: {
        english: `Sign up to Gotty`,
        thai: `สร้างบัญชี Gotty`,
    },
    signUpWithGoogleButtonText: {
        english: `Sign up with Google`,
        thai: `สร้างบัญชีด้วย Google`,
    },
    signUpWithAppleButtonText: {
        english: `Sign up with Apple`,
        thai: `สร้างบัญชีด้วย Apple`,
    },
    lineText: {
        english: `or`,
        thai: `หรือ`,
    },
    continueWithEmailButtonText: {
        english: `Continue with email`,
        thai: `ดำเนินการต่อด้วยอีเมล`,
    }
};

export const fonts = {
    titleText: {
        english: 'SatoshiMedium',
        thai: 'IBMPlexSansThaiMedium',
    },
    lineText: {
        english: 'SatoshiRegular',
        thai: 'IBMPlexSansThaiRegular',
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
