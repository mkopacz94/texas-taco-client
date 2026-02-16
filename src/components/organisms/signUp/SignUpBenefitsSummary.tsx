import CheckText from '@/components/molecules/signUp/CheckText';
import { useTranslation } from 'react-i18next';

const SignUpBenefitsSummary = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col space-y-4'>
      <CheckText text={t('signUpPage.savePreferencesMessage')} />
      <CheckText text={t('signUpPage.showOrdersHistoryMessage')} />
      <CheckText text={t('signUpPage.saveWithPrizesMessage')} />
    </div>
  );
};

export default SignUpBenefitsSummary;
