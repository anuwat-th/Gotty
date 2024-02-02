import { useSelector } from 'react-redux';
import { LanguageState } from '../../redux/reducer/LanguageReducer';

export const translations = {
    slideTitle1Text: {
        english: `Welcome To Gotty`,
        thai: `ยินดีต้อนรับสู่ Gotty`,
    },
    slideDescription1Text: {
        english: `Online platform for sharing your ideas. you can share your inspiration with your frienglishd.`,
        thai: `แพลตฟอร์มออนไลน์สำหรับแบ่งปันไอเดียของคุณ คุณสามารถแบ่งปันแรงบันดาลใจของคุณกับเพื่อนๆ ของคุณได้`,
    },
    slideTitle2Text: {
        english: `Share Your Ideas`,
        thai: `แบ่งปันไอเดียของคุณ`,
    },
    slideDescription2Text: {
        english: `In Gotty, you can sharing your photo and video with your friend and your community.`,
        thai: `ด้วย Gotty, คุณสามารถแบ่งปันรูปภาพและวิดีโอกับเพื่อนของคุณและคอมมูนิตี้ของของคุณ`,
    },
    slideTitle3Text: {
        english: `Get Start`,
        thai: `เริ่มต้น`,
    },
    slideDescription3Text: {
        english: `Let’s get started. find new way to sharing inspiration with fun on our platform.`,
        thai: `มาเริ่มกันเลย, ค้นพบวิถีของคุณในหาค้นหาแรงบันดาลใจบนแฟลตฟอร์มของเรา`,
    },
    nextButtonText: {
        english: `Next`,
        thai: `ต่อไป`,
    },
    skipButtonText: {
        english: `Skip`,
        thai: `ข้าม`,
    },
    signInButtonText: {
        english: `Sign In`,
        th: `เข้าสู่ระบบ`,
    },
    signUpButtonText: {
        english: `I'm new, Sign Up`,
        thai: `ฉันมาใหม่, สร้างบัญชีใหม่`,
    }
};

export const fonts = {
    sildeTitleText: {
        english: 'SatoshiMedium',
        thai: 'IBMPlexSansThaiSemiBold',
    },
    slideDescriptionText: {
        english: 'SatoshiRegular',
        thai: 'IBMPlexSansThaiRegular',
    }
}


export function getText<T extends keyof typeof translations>(textTitle: T): string {

    const language = useSelector((state: { language: LanguageState }) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}

export function getFont<T extends keyof typeof fonts>(fontTitle: T): string {
    const language = useSelector((state: { language: LanguageState }) => state.language.language);
    return (fonts[fontTitle] as Record<string, string>)[language];
}
