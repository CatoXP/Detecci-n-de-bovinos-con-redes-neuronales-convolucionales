import React from 'react';
import { Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar glass">
      <div className="container navbar-content">
        <div className="navbar-logo" onClick={() => scrollTo('inicio')}>
          <Activity size={24} color="var(--color-primary)" />
          <span className="logo-text">AgriHealth AI</span>
        </div>
        <ul className="navbar-links">
          <li>
            <button 
              className={`nav-btn ${activeSection === 'inicio' ? 'active' : ''}`}
              onClick={() => scrollTo('inicio')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => scrollTo('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${activeSection === 'pipeline' ? 'active' : ''}`}
              onClick={() => scrollTo('pipeline')}
            >
              Pipeline IA
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${activeSection === 'financiero' ? 'active' : ''}`}
              onClick={() => scrollTo('financiero')}
            >
              Análisis Financiero
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${activeSection === 'impacto' ? 'active' : ''}`}
              onClick={() => scrollTo('impacto')}
            >
              Impacto Social
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
