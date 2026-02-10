import NavbarLink from '@/components/molecules/navigation/NavbarLink';
import {
  DEALS_PATH,
  LOCATIONS_PATH,
  MENU_PATH,
  ORDER_PATH,
} from '@/constants/paths';

const MenuItems = () => {
  return (
    <div className='flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-0'>
      <NavbarLink path={ORDER_PATH} content='Zamów' />
      <NavbarLink path={MENU_PATH} content='Menu' />
      <NavbarLink path={DEALS_PATH} content='Okazje' />
      <NavbarLink path={LOCATIONS_PATH} content='Lokalizacje' />
    </div>
  );
};

export default MenuItems;
