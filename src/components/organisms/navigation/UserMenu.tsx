import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import { Separator } from '@/components/atoms/Separator';
import TextButton from '@/components/atoms/TextButton';
import { SIGN_UP_PATH } from '@/constants/paths';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInDialogContent from '@/components/organisms/signIn/SignInDialogContent';
import { useTranslation } from 'react-i18next';

interface UserMenuProps {
  className?: string;
}

const UserMenu: FC<UserMenuProps> = ({ className }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className={`${className} flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 items-center justify-center`}
    >
      <Dialog>
        <DialogTrigger asChild>
          <TextButton
            text={t('navigation.signIn')}
            className='hover:text-amber-500 transition duration-150'
          />
        </DialogTrigger>

        <DialogContent className='w-[90%] max-w-220'>
          <div className='absolute top-0 right-2 w-1/2 flex justify-center'>
            <div className='bg-amber-400 w-30 h-4 -top-px relative' />
          </div>
          <SignInDialogContent />
          <div className='absolute bottom-0 right-2 w-1/2 flex justify-center'>
            <div className='bg-amber-400 w-30 h-4 -bottom-px relative' />
          </div>
        </DialogContent>
      </Dialog>

      <Separator orientation='vertical' className='hidden lg:block' />
      <TextButton
        text={t('navigation.signUp')}
        className='hover:text-amber-500 transition duration-150'
        onClick={() => navigate(SIGN_UP_PATH)}
      />
    </div>
  );
};

export default UserMenu;
