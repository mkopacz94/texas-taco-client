import NavbarLink from '@/components/molecules/navigation/NavbarLink';
import {
  PRIZES_PATH,
  LOCATIONS_PATH,
  MENU_PATH,
  ORDER_PATH,
} from '@/constants/paths';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MenuItemsProps {
  onClose?: () => void;
}

const MenuItems: FC<MenuItemsProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-0'>
      <NavbarLink
        path={ORDER_PATH}
        content={t('navigation.order')}
        onClick={onClose}
      />
      <NavbarLink
        path={MENU_PATH}
        content={t('navigation.menu')}
        onClick={onClose}
      />
      <NavbarLink
        path={PRIZES_PATH}
        content={t('navigation.prizes')}
        onClick={onClose}
      />
      <NavbarLink
        path={LOCATIONS_PATH}
        content={t('navigation.locations')}
        onClick={onClose}
      />
    </div>
  );
};

export default MenuItems;
