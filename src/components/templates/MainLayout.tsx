import Navbar from '@/components/organisms/navigation/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className='p-6'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
