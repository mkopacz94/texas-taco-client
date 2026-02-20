import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import TextButton from '@/components/atoms/TextButton';
import { t } from 'i18next';
import SignInDialogContent from './SignInDialogContent';
import type { FC } from 'react';

interface SignInButtonProps {
  onSignUpClicked?: () => void;
}

const SignInButton: FC<SignInButtonProps> = ({ onSignUpClicked }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TextButton
          text={t('navigation.signIn')}
          className='hover:text-amber-500 transition duration-150'
        />
      </DialogTrigger>

      <DialogContent className='w-full sm:w-[90%] max-w-220 h-full sm:h-auto'>
        <div className='hidden absolute top-0 right-2 w-1/2 sm:flex justify-center'>
          <div className='bg-amber-400 w-30 h-4 -top-px relative' />
        </div>
        <SignInDialogContent onSignUpClicked={onSignUpClicked} />
        <div className='hidden absolute bottom-0 right-2 w-1/2 sm:flex justify-center'>
          <div className='bg-amber-400 w-30 h-4 -bottom-px relative' />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInButton;
