import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import LandingPageResponsive from './components/LandingPageResponsive';
import LoginSelection from './components/LoginSelection';
import LoginSelectionDesktop from './components/LoginSelectionDesktop';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload login components on mount
  useEffect(() => {
    // Preload images
    const imagesToPreload = [
      '/images/product-1-selection.png',
      '/images/product-2-selection.png',
      '/images/product-3-selection.png',
      '/images/vulue-logo.png'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageResponsive />} />
        <Route path="/login" element={isMobile ? <LoginSelection /> : <LoginSelectionDesktop />} />
      </Routes>
    </Router>
  );
}

export default App;
