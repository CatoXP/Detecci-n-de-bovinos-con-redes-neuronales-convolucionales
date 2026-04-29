import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { CircleDollarSign, TrendingUp, Clock } from 'lucide-react';
import './AnalisisFinanciero.css';

const lossData = [
  {
    name: 'Pérdidas Estimadas',
    'Sin Sistema': 115000,
    'Con Sistema': 40250,
  }
];

const scenarios = [
  { name: 'Conservador', flujo: '$26,750', van: '$84,931', tir: '232%', recuperacion: '5 meses' },
  { name: 'Moderado', flujo: '$72,250', van: '$248,948', tir: '628%', recuperacion: '2 meses' },
  { name: 'Optimista', flujo: '$109,625', van: '$383,681', tir: '953%', recuperacion: '5 semanas' },
];

const AnalisisFinanciero = () => {
  return (
    <section id="financiero" className="financiero-section">
      <div className="container">
        <h2>Análisis Financiero</h2>
        <p className="section-subtitle">Evaluación de rentabilidad e impacto económico</p>

        <div className="financial-summary">
          <div className="card stat-card">
            <div className="stat-icon-wrapper secondary"><CircleDollarSign size={24} /></div>
            <div className="stat-info">
              <h3 className="stat-value">$11,500 MXN</h3>
              <p className="stat-label">Inversión Inicial Total</p>
            </div>
          </div>
          <div className="card stat-card">
            <div className="stat-icon-wrapper success"><TrendingUp size={24} /></div>
            <div className="stat-info">
              <h3 className="stat-value">549%</h3>
              <p className="stat-label">ROI Estimado</p>
            </div>
          </div>
          <div className="card stat-card">
            <div className="stat-icon-wrapper primary"><Clock size={24} /></div>
            <div className="stat-info">
              <h3 className="stat-value">~2 Meses</h3>
              <p className="stat-label">Período de Recuperación</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card chart-card">
            <h3>Comparativa de Pérdidas Anuales</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={lossData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                  <RechartsTooltip formatter={(value) => `$${value.toLocaleString()} MXN`} cursor={{fill: 'transparent'}}/>
                  <Legend />
                  <Bar dataKey="Sin Sistema" fill="var(--color-alert)" radius={[4, 4, 0, 0]} barSize={60} />
                  <Bar dataKey="Con Sistema" fill="var(--color-success)" radius={[4, 4, 0, 0]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card table-card">
            <h3>Escenarios de VAN y TIR</h3>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Escenario</th>
                    <th>Flujo de Efectivo</th>
                    <th>VAN</th>
                    <th>TIR</th>
                    <th>Recuperación</th>
                  </tr>
                </thead>
                <tbody>
                  {scenarios.map((scenario, index) => (
                    <tr key={index}>
                      <td><strong>{scenario.name}</strong></td>
                      <td>{scenario.flujo}</td>
                      <td className="text-success font-medium">{scenario.van}</td>
                      <td className="text-primary font-bold">{scenario.tir}</td>
                      <td>{scenario.recuperacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalisisFinanciero;
