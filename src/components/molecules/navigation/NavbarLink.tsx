import Typography from '@/components/atoms/Typography';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarLinkProps {
  path: string;
  content: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, content }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div className='relative'>
          <Typography
            size='lg'
            weight='bold'
            color={
              isActive ? 'text-amber-500 -mt-2 lg:mt-0' : 'text-neutral-800'
            }
            className='hover:text-amber-500 transition duration-150'
          >
            {content}
          </Typography>
          {isActive && (
            <div className='absolute left-0 right-0 -bottom-0.5 h-0.5 bg-amber-500' />
          )}
        </div>
      )}
    </NavLink>
  );
};

export default NavbarLink;
