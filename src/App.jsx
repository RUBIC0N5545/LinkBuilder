import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/MainPage';
import SettingsPage from '../src/pages/SettingsPage';
import Layout from '../src/components/Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;