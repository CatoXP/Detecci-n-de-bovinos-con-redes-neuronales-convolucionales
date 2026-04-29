import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Dashboard from './components/Dashboard';
import Pipeline from './components/Pipeline';
import AnalisisFinanciero from './components/AnalisisFinanciero';
import ImpactoSocial from './components/ImpactoSocial';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'dashboard', 'pipeline', 'financiero', 'impacto'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        <Login onLoginSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <div className="app-container">
          <Navbar activeSection={activeSection} />
          <main>
            <Inicio />
            <Dashboard />
            <Pipeline />
            <AnalisisFinanciero />
            <ImpactoSocial />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
