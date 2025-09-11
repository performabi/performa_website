import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AIClassifierPage from './pages/AIClassifierPage';
import BiHealthCheckPage from './pages/BiHealthCheckPage';
import PortfolioPage from './pages/PortfolioPage';
import JgsSalesReportPage from './pages/JgsSalesReportPage'; // 1. Import the new page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/ai-classifier" element={<AIClassifierPage />} />
          <Route path="/bihealthcheck" element={<BiHealthCheckPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/jgs-sales-report" element={<JgsSalesReportPage />} /> {/* 2. Add the new route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

