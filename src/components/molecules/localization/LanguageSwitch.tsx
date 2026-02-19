import { useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import plFlagImage from '@/assets/images/pl_flag.svg';
import ukFlagImage from '@/assets/images/uk_flag.svg';
import type { Language } from '@/types/localization/language';

const languageMap: Record<Language, string> = {
  Polish: 'pl',
  English: 'en',
};

interface LanguageSwitchProps {
  className?: string;
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('Polish');

  useEffect(() => {
    i18n.changeLanguage(languageMap[selectedLanguage]);
  }, [selectedLanguage, i18n]);

  const changeLanguage = () => {
    setSelectedLanguage((prev) => (prev === 'Polish' ? 'English' : 'Polish'));
  };

  return (
    <div
      onClick={changeLanguage}
      className={`${className} w-6 flex cursor-pointer`}
    >
      <img src={selectedLanguage === 'Polish' ? ukFlagImage : plFlagImage} />
    </div>
  );
};

export default LanguageSwitch;
