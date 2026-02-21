import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import TextButton from '@/components/atoms/TextButton';
import SignInDialogContent from './SignInDialogContent';
import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { VisuallyHidden } from 'radix-ui';

interface SignInButtonProps {
  onSignUpClicked?: () => void;
  onSignedIn?: () => void;
}

const SignInButton: FC<SignInButtonProps> = ({
  onSignUpClicked,
  onSignedIn,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSignedIn = () => {
    setOpen(false); // close dialog
    onSignedIn?.();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <TextButton
          text={t('navigation.signIn')}
          className='hover:text-amber-500 transition duration-150'
        />
      </DialogTrigger>

      <DialogContent className='w-full sm:w-[90%] max-w-220 h-full sm:h-auto'>
        <VisuallyHidden.Root>
          <DialogTitle>{t('signInPage.signIn')}</DialogTitle>
        </VisuallyHidden.Root>
        <div className='hidden absolute top-0 right-2 w-1/2 sm:flex justify-center'>
          <div className='bg-amber-400 w-30 h-4 -top-px relative' />
        </div>
        <SignInDialogContent
          onSignUpClicked={onSignUpClicked}
          onSignedIn={handleSignedIn}
        />
        <div className='hidden absolute bottom-0 right-2 w-1/2 sm:flex justify-center'>
          <div className='bg-amber-400 w-30 h-4 -bottom-px relative' />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInButton;
