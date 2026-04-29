import React from 'react';
import { Camera, Cpu, ActivitySquare, ArrowRight } from 'lucide-react';
import './Pipeline.css';

const Pipeline = () => {
  return (
    <section id="pipeline" className="pipeline-section">
      <div className="container">
        <h2>Pipeline de IA</h2>
        <p className="section-subtitle">Arquitectura del sistema de detección temprana en tres etapas</p>

        <div className="pipeline-flow">
          {/* Etapa 1 */}
          <div className="card stage-card">
            <div className="stage-header">
              <div className="stage-icon"><Camera size={28} /></div>
              <div className="stage-title">
                <span className="stage-number">Etapa 1</span>
                <h3>Detección Visual</h3>
              </div>
            </div>
            <p className="stage-desc">
              Identificación precisa de la región periocular en tiempo real utilizando la arquitectura YOLOv8n.
            </p>
            <div className="metrics-box">
              <div className="metric"><span>mAP50:</span> <strong>0.850</strong></div>
              <div className="metric"><span>Precision:</span> <strong>0.818</strong></div>
              <div className="metric"><span>Recall:</span> <strong>0.846</strong></div>
            </div>
          </div>

          <div className="flow-arrow"><ArrowRight size={32} /></div>

          {/* Etapa 2 */}
          <div className="card stage-card">
            <div className="stage-header">
              <div className="stage-icon"><ActivitySquare size={28} /></div>
              <div className="stage-title">
                <span className="stage-number">Etapa 2</span>
                <h3>Medición Térmica</h3>
              </div>
            </div>
            <p className="stage-desc">
              Captura de temperatura infrarroja sin contacto con sensor MLX90614 y medición de distancia con HC-SR04.
            </p>
            <div className="metrics-box">
              <div className="metric"><span>Sensor:</span> <strong>MLX90614</strong></div>
              <div className="metric"><span>Distancia óptima:</span> <strong>10-25cm</strong></div>
              <div className="metric"><span>Calibración:</span> <strong>Automática</strong></div>
            </div>
          </div>

          <div className="flow-arrow"><ArrowRight size={32} /></div>

          {/* Etapa 3 */}
          <div className="card stage-card">
            <div className="stage-header">
              <div className="stage-icon"><Cpu size={28} /></div>
              <div className="stage-title">
                <span className="stage-number">Etapa 3</span>
                <h3>Clasificación</h3>
              </div>
            </div>
            <p className="stage-desc">
              Modelo predictivo para determinar la probabilidad de estado febril combinando datos térmicos y ambientales.
            </p>
            <div className="metrics-box">
              <div className="metric"><span>Accuracy:</span> <strong>92.87%</strong></div>
              <div className="metric"><span>F1-Score:</span> <strong>0.927</strong></div>
              <div className="metric"><span>ROC-AUC:</span> <strong>0.9846</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
