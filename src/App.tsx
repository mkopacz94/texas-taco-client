import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';
import {
  DEALS_PATH,
  LOCATIONS_PATH,
  MENU_PATH,
  ORDER_PATH,
  SIGN_UP_PATH,
} from './constants/paths';
import MenuPage from './components/pages/MenuPage';
import DealsPage from './components/pages/DealsPage';
import LocationsPage from './components/pages/LocationsPage';
import OrderPage from './components/pages/OrderPage';
import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={SIGN_UP_PATH} element={<SignUpPage />} />
          <Route path={ORDER_PATH} element={<OrderPage />} />
          <Route path={MENU_PATH} element={<MenuPage />} />
          <Route path={DEALS_PATH} element={<DealsPage />} />
          <Route path={LOCATIONS_PATH} element={<LocationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
