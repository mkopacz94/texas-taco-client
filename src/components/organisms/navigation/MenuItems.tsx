import NavbarLink from '@/components/molecules/navigation/NavbarLink';
import {
  PRIZES_PATH,
  LOCATIONS_PATH,
  MENU_PATH,
  ORDER_PATH,
} from '@/constants/paths';
import { useTranslation } from 'react-i18next';

const MenuItems = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-0'>
      <NavbarLink path={ORDER_PATH} content={t('navigation.order')} />
      <NavbarLink path={MENU_PATH} content={t('navigation.menu')} />
      <NavbarLink path={PRIZES_PATH} content={t('navigation.prizes')} />
      <NavbarLink path={LOCATIONS_PATH} content={t('navigation.locations')} />
    </div>
  );
};

export default MenuItems;
