import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
