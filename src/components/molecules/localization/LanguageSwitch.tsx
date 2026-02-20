import plFlagImage from '@/assets/images/pl_flag.svg';
import ukFlagImage from '@/assets/images/uk_flag.svg';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitchProps {
  className?: string;
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const isPolish = i18n.language === 'pl';

  const changeLanguage = () => {
    i18n.changeLanguage(isPolish ? 'en' : 'pl');
  };

  return (
    <div
      onClick={changeLanguage}
      className={`${className} w-6 flex cursor-pointer`}
    >
      <img src={isPolish ? ukFlagImage : plFlagImage} />
    </div>
  );
};

export default LanguageSwitch;
