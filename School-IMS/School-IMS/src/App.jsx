// src/App.js
import { useState } from 'react';
import DashboardLayout from '../src/assets/pages/DashboardLayout.jsx';
import Navigation from '../src/assets/pages/Navigation.jsx';
import Home from '../src/assets/pages/Home.jsx';
import Analytics from '../src/assets/pages/Analytics.jsx';
import Settings from '../src/assets/pages/Settings.jsx';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <DashboardLayout>
      <Navigation setPage={setPage} />
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;
