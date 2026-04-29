import React, { useState } from 'react';
import { Heart, Thermometer, Wind, AlertCircle } from 'lucide-react';
import bovinoImage from '../assets/bovino.jpeg';
import './SimulacionBovino.css';

const SimulacionBovino = () => {
  const [selectedBovino, setSelectedBovino] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const bovinos = [
    {
      id: 1,
      nombre: 'Toro #001',
      estado: 'Saludable',
      frecuenciaCardiaca: '72 bpm',
      temperatura: '38.5°C',
      respiracion: '32 rpm',
      color: '#2E7D32'
    },
    {
      id: 2,
      nombre: 'Vaca #002',
      estado: 'Alerta',
      frecuenciaCardiaca: '85 bpm',
      temperatura: '39.2°C',
      respiracion: '40 rpm',
      color: '#FF9800'
    },
    {
      id: 3,
      nombre: 'Ternero #003',
      estado: 'Monitoreando',
      frecuenciaCardiaca: '78 bpm',
      temperatura: '38.8°C',
      respiracion: '35 rpm',
      color: '#2196F3'
    }
  ];

  const bovino = bovinos.find(b => b.id === selectedBovino);

  return (
    <div className="simulacion-container">
      <h2 className="simulacion-title">Simulación de Monitoreo en Tiempo Real</h2>
      
      <div className="simulacion-content">
        {/* Imagen del Bovino */}
        <div className="bovino-image-wrapper">
          <div className="bovino-card">
            <img src={bovinoImage} alt="Bovino" className="bovino-image" />
            <div className="status-badge" style={{ backgroundColor: bovino.color }}>
              {bovino.estado}
            </div>
          </div>
        </div>

        {/* Panel de Detalles */}
        <div className="bovino-panel">
          <div className="panel-header">
            <h3 className="panel-title">{bovino.nombre}</h3>
            <button 
              className="toggle-details-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? '−' : '+'}
            </button>
          </div>

          <div className="vitales-grid">
            <div className="vital-item">
              <div className="vital-icon heart">
                <Heart size={20} />
              </div>
              <div className="vital-info">
                <p className="vital-label">Frecuencia Cardíaca</p>
                <p className="vital-value">{bovino.frecuenciaCardiaca}</p>
              </div>
            </div>

            <div className="vital-item">
              <div className="vital-icon temp">
                <Thermometer size={20} />
              </div>
              <div className="vital-info">
                <p className="vital-label">Temperatura</p>
                <p className="vital-value">{bovino.temperatura}</p>
              </div>
            </div>

            <div className="vital-item">
              <div className="vital-icon breath">
                <Wind size={20} />
              </div>
              <div className="vital-info">
                <p className="vital-label">Frecuencia Respiratoria</p>
                <p className="vital-value">{bovino.respiracion}</p>
              </div>
            </div>
          </div>

          {showDetails && (
            <div className="details-section">
              <div className="alert-info">
                <AlertCircle size={18} />
                <p>Último escaneo: hace 2 minutos | Próximo: en 5 minutos</p>
              </div>
              <div className="prediction">
                <h4>Predicción del Modelo IA:</h4>
                <p className="prediction-text">
                  {bovino.estado === 'Saludable' && 'El bovino presenta signos vitales normales. Continuar con monitoreo rutinario.'}
                  {bovino.estado === 'Alerta' && 'Ligera elevación de temperatura detectada. Recomendado monitoreo más frecuente.'}
                  {bovino.estado === 'Monitoreando' && 'Parámetros dentro de rango esperado para su edad. Sistema en observación.'}
                </p>
              </div>
            </div>
          )}

          <div className="bovino-selector">
            <p className="selector-label">Selecciona otro bovino:</p>
            <div className="selector-buttons">
              {bovinos.map(b => (
                <button
                  key={b.id}
                  className={`selector-btn ${selectedBovino === b.id ? 'active' : ''}`}
                  onClick={() => setSelectedBovino(b.id)}
                  style={selectedBovino === b.id ? { backgroundColor: b.color } : {}}
                >
                  {b.nombre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulacionBovino;
