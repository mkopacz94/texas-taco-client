import appName from '@/assets/images/appName.png';
import { Squash } from 'hamburger-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuItems from './MenuItems';
import DrawerMenu from './DrawerMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className='w-full p-3 lg:p-6 grid grid-cols-3 border-b-neutral-200 border-b'>
        <div className='hidden lg:flex items-center'>
          <MenuItems />
        </div>
        <div className='lg:hidden'>
          <Squash
            size={20}
            color='#f59e0b'
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
        <div className='flex justify-center items-center'>
          <NavLink to='/'>
            <img src={appName} className='h-fit max-h-6' />
          </NavLink>
        </div>
      </div>

      {isOpen && <DrawerMenu />}
    </>
  );
};

export default Navbar;
