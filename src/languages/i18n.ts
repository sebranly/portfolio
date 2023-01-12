import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            test1: 'Language is English',
          }
        }
      },
      fr: {
        translation: {
          description: {
            test1: 'Language is French',
          }
        }
      }
    }
  });

export default i18n;