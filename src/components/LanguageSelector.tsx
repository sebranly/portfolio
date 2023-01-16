import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../languages';
import { Language } from '../types';

export interface LanguageSelectorProps {}

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const { i18n } = useTranslation();

  return (
    <div className="mb-4">
      {languages.map((language: Language) => {
        const { shortName, name } = language;
        const isSelected = i18n.resolvedLanguage === shortName;

        return (
          <button
            className="rounded mr-2"
            key={shortName}
            style={{
              fontWeight: isSelected ? 'bold' : 'normal',
              textDecorationLine: isSelected ? 'underline' : 'none'
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(shortName)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export { LanguageSelector };
