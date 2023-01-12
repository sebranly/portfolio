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
          header: {
            author: {
              prefix: `I'm `,
              suffix: ', a Software Engineer.'
            },
            introduction: 'Here are some of my personal projects.',
            welcome: 'Welcome to my Portfolio!',
          }
        }
      },
      fr: {
        translation: {
          header: {
            author: {
              prefix: 'Je suis ',
              suffix: ', un Ingénieur en Développement Web.'
            },
            introduction: 'Voici quelques uns de mes projets personnels.',
            welcome: 'Bienvenue sur mon Portfolio !',
          }
        }
      }
    }
  });

export default i18n;