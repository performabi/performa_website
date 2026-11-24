import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AIClassifierPage from './pages/AIClassifierPage';
import BiHealthCheckPage from './pages/BiHealthCheckPage';
import PortfolioPage from './pages/PortfolioPage';
import JgsSalesReportPage from './pages/JgsSalesReportPage';
import NexusPage from './pages/NexusPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/ai-classifier" element={<AIClassifierPage />} />
            <Route path="/bihealthcheck" element={<BiHealthCheckPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/jgs-sales-report" element={<JgsSalesReportPage />} />
            <Route path="/nexus" element={<NexusPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
