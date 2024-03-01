import { useSelector } from 'react-redux';
import { LanguageState } from '../../redux/reducer/LanguageReducer';

export const fonts = {
  buttonText: {
    enlish: 'SatoshiMedium',
    thai: 'IBMPlexSansThaiMedium',
  },
};

export function getFont<T extends keyof typeof fonts>(fontTitle: T): string {
  const language = useSelector((state: { language: LanguageState }) => state.language.language);
  return (fonts[fontTitle] as Record<string, string>)[language];
}
