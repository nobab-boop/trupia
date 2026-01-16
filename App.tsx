import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Equipment from './pages/Equipment';
import EquipmentDetail from './pages/EquipmentDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/equipment/:id" element={<EquipmentDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;