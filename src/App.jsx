import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
// Ensure the import statements match the filenames exactly
import AIClassifierPage from './pages/AIClassifierPage';
import BiHealthCheckPage from './pages/BiHealthCheckPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ai-classifier" element={<AIClassifierPage />} />
          <Route path="bihealthcheck" element={<BiHealthCheckPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;