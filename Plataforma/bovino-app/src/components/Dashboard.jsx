import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, CheckCircle2, ThermometerSun, Activity } from 'lucide-react';
import SimulacionBovino from './SimulacionBovino';
import './Dashboard.css';

const dummyData = [
  { id: 'B-001', temp: 38.5, status: 'Normal', prob: 12, time: '10:05 AM', history: [38.2, 38.4, 38.5, 38.3, 38.5, 38.6, 38.5] },
  { id: 'B-002', temp: 39.8, status: 'Alerta Febril', prob: 94, time: '10:12 AM', history: [38.5, 38.7, 38.9, 39.2, 39.5, 39.7, 39.8] },
  { id: 'B-003', temp: 38.2, status: 'Normal', prob: 8, time: '10:18 AM', history: [38.1, 38.2, 38.0, 38.3, 38.2, 38.1, 38.2] },
  { id: 'B-004', temp: 38.7, status: 'Normal', prob: 25, time: '10:25 AM', history: [38.4, 38.5, 38.6, 38.5, 38.6, 38.7, 38.7] },
  { id: 'B-005', temp: 39.5, status: 'Alerta Febril', prob: 88, time: '10:30 AM', history: [38.6, 38.8, 39.0, 39.1, 39.3, 39.4, 39.5] },
];

const generateChartData = (history) => {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Hoy'];
  return days.map((day, index) => ({
    day,
    temperatura: history[index]
  }));
};

const Dashboard = () => {
  const [selectedBovine, setSelectedBovine] = useState(dummyData[0]);

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="container">
        <h2>Dashboard del Ganadero</h2>
        <p className="section-subtitle">Monitoreo en tiempo real y análisis de temperatura periocular</p>

        <div className="summary-cards">
          <div className="card summary-card">
            <div className="summary-icon"><Activity size={24} /></div>
            <div>
              <p className="summary-label">Total Hoy</p>
              <p className="summary-value">100</p>
            </div>
          </div>
          <div className="card summary-card">
            <div className="summary-icon success"><CheckCircle2 size={24} /></div>
            <div>
              <p className="summary-label">Sanos</p>
              <p className="summary-value">98</p>
            </div>
          </div>
          <div className="card summary-card">
            <div className="summary-icon alert"><AlertTriangle size={24} /></div>
            <div>
              <p className="summary-label">Alertas</p>
              <p className="summary-value">2</p>
            </div>
          </div>
        </div>

        {selectedBovine.status === 'Alerta Febril' && (
          <div className="alert-banner animate-fade-in">
            <AlertTriangle size={24} />
            <div>
              <strong>¡Alerta Febril Detectada!</strong> El bovino {selectedBovine.id} ha excedido el umbral térmico (Probabilidad: {selectedBovine.prob}%).
            </div>
          </div>
        )}

        <SimulacionBovino />

        <div className="dashboard-grid">
          <div className="card table-card">
            <h3>Registro de Lecturas</h3>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Temp (°C)</th>
                    <th>Estado</th>
                    <th>Probabilidad</th>
                    <th>Hora</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((bovine) => (
                    <tr 
                      key={bovine.id} 
                      className={selectedBovine.id === bovine.id ? 'selected' : ''}
                      onClick={() => setSelectedBovine(bovine)}
                    >
                      <td><strong>{bovine.id}</strong></td>
                      <td>
                        <div className="temp-cell">
                          <ThermometerSun size={16} className={bovine.temp > 39 ? 'text-alert' : 'text-primary'} />
                          {bovine.temp}°C
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${bovine.status === 'Normal' ? 'badge-success' : 'badge-alert'}`}>
                          {bovine.status}
                        </span>
                      </td>
                      <td>{bovine.prob}%</td>
                      <td>{bovine.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card chart-card">
            <h3>Historial de Temperatura - {selectedBovine.id}</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={generateChartData(selectedBovine.history)}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="temperatura" 
                    stroke={selectedBovine.status === 'Alerta Febril' ? 'var(--color-alert)' : 'var(--color-primary)'} 
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
