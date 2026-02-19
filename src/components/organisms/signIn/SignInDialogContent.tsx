import { Button } from '@/components/atoms/Button';
import SignUpBenefitsSummary from '../signUp/SignUpBenefitsSummary';
import SignInForm from './SignInForm';
import { DialogClose } from '@/components/atoms/Dialog';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SIGN_UP_PATH } from '@/constants/paths';

const SignInDialogContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='m-4 flex space-x-8'>
      <div className='w-1/2 bg-white p-8 rounded-2xl shadow-lg flex items-center'>
        <div className='w-full'>
          <SignInForm />
        </div>
      </div>
      <div className='w-1/2 flex flex-col items-center p-8 space-y-12'>
        <SignUpBenefitsSummary imageVisible={false} />
        <DialogClose asChild>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => navigate(SIGN_UP_PATH)}
          >
            {t('signUpPage.createAccount')}
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default SignInDialogContent;
