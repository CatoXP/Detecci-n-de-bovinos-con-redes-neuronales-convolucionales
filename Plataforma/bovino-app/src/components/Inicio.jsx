import React from 'react';
import { Activity, ShieldCheck, TrendingUp } from 'lucide-react';
import './Inicio.css';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-section">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Detección Temprana de <br />
            <span className="text-highlight">Enfermedades Bovinas</span> mediante IA
          </h1>
          <p className="hero-subtitle">
            Monitoreo inteligente de salud bovina en tiempo real
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' })}>
              Ver Dashboard
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('pipeline').scrollIntoView({ behavior: 'smooth' })}>
              Conocer el Sistema
            </button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="card stat-card animate-fade-in delay-100">
            <div className="stat-icon-wrapper primary">
              <Activity size={24} />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">100</h3>
              <p className="stat-label">Bovinos monitoreados</p>
            </div>
          </div>
          
          <div className="card stat-card animate-fade-in delay-200">
            <div className="stat-icon-wrapper success">
              <ShieldCheck size={24} />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">92.87%</h3>
              <p className="stat-label">Precisión del modelo</p>
            </div>
          </div>
          
          <div className="card stat-card animate-fade-in delay-300">
            <div className="stat-icon-wrapper secondary">
              <TrendingUp size={24} />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">$11,500 MXN</h3>
              <p className="stat-label">Inversión total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
