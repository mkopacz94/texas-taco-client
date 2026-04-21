import Typography from '@/components/atoms/Typography';
import { BadgeInfo } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SignUpSucceededDialogContent = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center text-center space-y-6'>
      <BadgeInfo size={96} className='text-amber-500' />

      <Typography size='lg' weight='bold'>
        {t('signUpPage.success.title')}
      </Typography>

      <Typography>{t('signUpPage.success.message')}</Typography>
    </div>
  );
};

export default SignUpSucceededDialogContent;
