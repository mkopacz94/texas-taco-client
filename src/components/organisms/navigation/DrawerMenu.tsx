import MenuItems from './MenuItems';

const DrawerMenu = () => {
  return (
    <div className='lg:hidden fixed top-19 left-0 w-full h-[calc(100vh-4rem)] bg-white z-40 flex flex-col'>
      <MenuItems />
    </div>
  );
};

export default DrawerMenu;
