import { Separator } from '@/components/atoms/Separator';
import TextButton from '@/components/atoms/TextButton';
import type { FC } from 'react';

interface UserMenuProps {
  className?: string;
}

const UserMenu: FC<UserMenuProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 items-center justify-center`}
    >
      <TextButton
        text='Logowanie'
        size='lg'
        className='hover:text-amber-500 transition duration-150'
      />
      <Separator orientation='vertical' className='hidden lg:block' />
      <TextButton
        text='Rejestracja'
        size='lg'
        className='hover:text-amber-500 transition duration-150'
      />
    </div>
  );
};

export default UserMenu;
