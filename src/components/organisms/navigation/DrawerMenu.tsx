import { Separator } from '@/components/atoms/Separator';
import MenuItems from './MenuItems';
import UserMenu from './UserMenu';

const DrawerMenu = () => {
  return (
    <div className='lg:hidden fixed top-19 left-0 w-full h-[calc(100vh-4rem)] bg-white z-40 flex flex-col py-6 px-8 space-y-6'>
      <MenuItems />
      <Separator />
      <UserMenu />
    </div>
  );
};

export default DrawerMenu;
