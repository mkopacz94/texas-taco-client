import { Button } from '@/components/atoms/Button';
import SignUpBenefitsSummary from '../signUp/SignUpBenefitsSummary';
import SignInForm from './SignInForm';
import { DialogClose } from '@/components/atoms/Dialog';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SIGN_UP_PATH } from '@/constants/paths';
import Typography from '@/components/atoms/Typography';
import type { FC } from 'react';

interface SignInDialogContentProps {
  onSignUpClicked?: () => void;
}

const SignInDialogContent: FC<SignInDialogContentProps> = ({
  onSignUpClicked,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='sm:m-4 flex sm:space-x-8'>
      <div className='grow sm:w-1/2 bg-white p-8 rounded-2xl sm:shadow-lg flex sm:items-center'>
        <div className='w-full'>
          <SignInForm />
          <div className='sm:hidden flex justify-center mt-6'>
            <Typography size='sm' className='flex items-center'>
              {t('signInPage.newInTexasTaco')}
            </Typography>
            <DialogClose asChild onClick={onSignUpClicked}>
              <Typography
                size='sm'
                weight='bold'
                className='ml-1 cursor-pointer'
                underline={true}
                onClick={() => navigate(SIGN_UP_PATH)}
              >
                {' '}
                {t('signInPage.signUp')}
              </Typography>
            </DialogClose>
          </div>
        </div>
      </div>
      <div className='w-1/2 hidden sm:flex flex-col items-center p-8 space-y-12'>
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
