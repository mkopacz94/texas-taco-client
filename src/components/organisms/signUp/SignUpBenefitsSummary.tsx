import Typography from '@/components/atoms/Typography';
import CheckText from '@/components/molecules/signUp/CheckText';
import { useTranslation } from 'react-i18next';
import signUpImage from '@/assets/images/signUpImage.png';
import type { FC } from 'react';

interface SignUpBenefitsSummaryProps {
  imageVisible?: boolean;
}

const SignUpBenefitsSummary: FC<SignUpBenefitsSummaryProps> = ({
  imageVisible = true,
}) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col space-y-4'>
      <Typography
        size='2xl'
        weight='medium'
        className='text-center md:text-start'
      >
        {t('signUpPage.orderFasterTitle')}
      </Typography>
      {imageVisible && <img src={signUpImage} className='h-fit' />}
      <div className='space-y-6 mt-4'>
        <CheckText text={t('signUpPage.savePreferencesMessage')} />
        <CheckText text={t('signUpPage.showOrdersHistoryMessage')} />
        <CheckText text={t('signUpPage.saveWithPrizesMessage')} />
      </div>
    </div>
  );
};

export default SignUpBenefitsSummary;
