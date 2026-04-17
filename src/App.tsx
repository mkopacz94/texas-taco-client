import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';
import {
  PRIZES_PATH,
  LOCATIONS_PATH,
  MENU_PATH,
  ORDER_PATH,
  SIGN_UP_PATH,
  VERIFICATION_PATH,
} from './constants/paths';
import MenuPage from './components/pages/MenuPage';
import PrizesPage from './components/pages/PrizesPage';
import LocationsPage from './components/pages/LocationsPage';
import OrderPage from './components/pages/OrderPage';
import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';
import { AuthContextProvider } from './context/AuthContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import VerificationPage from './components/pages/VerificationPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={VERIFICATION_PATH} element={<VerificationPage />} />
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path={SIGN_UP_PATH} element={<SignUpPage />} />
              <Route path={ORDER_PATH} element={<OrderPage />} />
              <Route path={MENU_PATH} element={<MenuPage />} />
              <Route path={PRIZES_PATH} element={<PrizesPage />} />
              <Route path={LOCATIONS_PATH} element={<LocationsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
