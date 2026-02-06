import appName from '@/assets/images/appName.png';
import NavbarLink from '@/components/molecules/navigation/NavbarLink';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full p-6 grid grid-cols-3'>
      <div className='flex items-center'>
        <div className='flex space-x-6'>
          <NavbarLink path='/' content='Zamów' />
          <NavbarLink path='/menu' content='Menu' />
          <NavbarLink path='/deals' content='Okazje' />
          <NavbarLink path='/locations' content='Lokalizacje' />
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <NavLink to='/'>
          <img src={appName} className='h-fit max-h-6' />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
