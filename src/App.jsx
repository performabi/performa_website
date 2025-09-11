import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
// Import the page components so the router can use them
import AiClassifierPage from './pages/AiClassifierPage';
import BiHealthCheckPage from './pages/BiHealthCheckPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* The index route is the default page for the parent route "/" */}
          <Route index element={<HomePage />} />
          
          {/* Add routes for your other pages here */}
          <Route path="ai-classifier" element={<AiClassifierPage />} />
          <Route path="bihealthcheck" element={<BiHealthCheckPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

