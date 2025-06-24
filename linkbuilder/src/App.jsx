import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/MainPage';
import SettingsPage from '../src/pages/SettingsPage';
import Layout from '../src/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="" element={<MainPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;