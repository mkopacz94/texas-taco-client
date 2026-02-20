import { Separator } from '@/components/atoms/Separator';
import MenuItems from './MenuItems';
import UserMenu from './UserMenu';
import type { FC } from 'react';

interface DrawerMenuProps {
  onClose?: () => void;
}

const DrawerMenu: FC<DrawerMenuProps> = ({ onClose }) => {
  return (
    <div className='lg:hidden fixed top-19 left-0 w-full h-[calc(100vh-4rem)] bg-white z-40 flex flex-col py-6 px-8 space-y-6'>
      <MenuItems onClose={onClose} />
      <Separator />
      <UserMenu onClose={onClose} />
    </div>
  );
};

export default DrawerMenu;
