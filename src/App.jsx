import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AIClassifierPage from './pages/AIClassifierPage';
import BiHealthCheckPage from './pages/BiHealthCheckPage';
import PortfolioPage from './pages/PortfolioPage';
import JgsSalesReportPage from './pages/JgsSalesReportPage';

// Helper component for the external redirect
const JgsRedirect = () => {
  useEffect(() => {
    // This sends the user to the external Vercel URL immediately
    window.location.replace("https://jgs-daily-cash-app.vercel.app");
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1929] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#088f8f] mx-auto mb-4"></div>
        <p className="text-gray-400">Redirecting to JGS App...</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/ai-classifier" element={<AIClassifierPage />} />
          <Route path="/bihealthcheck" element={<BiHealthCheckPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/jgs-sales-report" element={<JgsSalesReportPage />} />
          
          {/* New redirect route for /jgs */}
          <Route path="/jgs" element={<JgsRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
