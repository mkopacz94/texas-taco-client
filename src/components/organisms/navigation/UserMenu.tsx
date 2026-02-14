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

interface UserMenuProps {
  className?: string;
}

const UserMenu: FC<UserMenuProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${className} flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 items-center justify-center`}
    >
      <Dialog>
        <DialogTrigger asChild>
          <TextButton
            text='Logowanie'
            className='hover:text-amber-500 transition duration-150'
          />
        </DialogTrigger>

        <DialogContent className='w-[90%] max-w-200'>
          <SignInDialogContent />
        </DialogContent>
      </Dialog>

      <Separator orientation='vertical' className='hidden lg:block' />
      <TextButton
        text='Rejestracja'
        className='hover:text-amber-500 transition duration-150'
        onClick={() => navigate(SIGN_UP_PATH)}
      />
    </div>
  );
};

export default UserMenu;
