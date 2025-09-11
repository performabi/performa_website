    import { HashRouter, Routes, Route } from 'react-router-dom';
    import Layout from './components/Layout/Layout';
    import HomePage from './pages/HomePage';
    import AIClassifierPage from './pages/AIClassifierPage';
    import BiHealthCheckPage from './pages/BiHealthCheckPage';
    
    function App() {
      return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/ai-classifier" element={<AIClassifierPage />} />
              <Route path="/bihealthcheck" element={<BiHealthCheckPage />} />
            </Route>
          </Routes>
        </HashRouter>
      );
    }
    
    export default App;
    

