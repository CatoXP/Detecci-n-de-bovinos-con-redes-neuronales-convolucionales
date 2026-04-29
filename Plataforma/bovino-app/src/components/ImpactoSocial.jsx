import React from 'react';
import { Leaf, Users, ShieldCheck, Quote } from 'lucide-react';
import './ImpactoSocial.css';

const stakeholders = [
  { actor: 'Ganadero', tipo: 'Primario', interes: 'Rentabilidad y sanidad animal', impacto: 'Alto (Ahorro y eficiencia)' },
  { actor: 'Veterinario', tipo: 'Primario', interes: 'Herramientas de diagnóstico', impacto: 'Alto (Optimización de tiempo)' },
  { actor: 'SENASICA', tipo: 'Secundario', interes: 'Control de brotes sanitarios', impacto: 'Medio (Cumplimiento normativo)' },
  { actor: 'SADER/FIRA', tipo: 'Secundario', interes: 'Desarrollo tecnológico', impacto: 'Medio (Financiamiento e impulso)' },
  { actor: 'Comunidades Rurales', tipo: 'Terciario', interes: 'Estabilidad económica local', impacto: 'Indirecto (Sostenibilidad)' },
  { actor: 'Consumidores', tipo: 'Terciario', interes: 'Seguridad alimentaria', impacto: 'Indirecto (Calidad de producto)' }
];

const ImpactoSocial = () => {
  return (
    <section id="impacto" className="impacto-section">
      <div className="container">
        <h2>Impacto y Sostenibilidad</h2>
        <p className="section-subtitle">Evaluación integral del proyecto en múltiples dimensiones</p>

        <div className="sustainability-grid">
          <div className="card sust-card">
            <div className="sust-icon"><Leaf size={28} /></div>
            <h3>Sostenibilidad Económica</h3>
            <p>Implementación accesible que garantiza retorno de inversión rápido, democratizando el acceso a tecnología de punta para pequeños y medianos ganaderos.</p>
          </div>
          <div className="card sust-card">
            <div className="sust-icon secondary"><ShieldCheck size={28} /></div>
            <h3>Sostenibilidad Técnica</h3>
            <p>Arquitectura escalable basada en modelos de IA eficientes (YOLOv8n) y hardware accesible, facilitando su mantenimiento y actualización a largo plazo.</p>
          </div>
          <div className="card sust-card">
            <div className="sust-icon primary"><Users size={28} /></div>
            <h3>Sostenibilidad Social</h3>
            <p>Fortalece la seguridad alimentaria y dignifica el trabajo ganadero al proporcionar herramientas avanzadas que mejoran la calidad de vida en zonas rurales.</p>
          </div>
        </div>

        <div className="card quote-card">
          <Quote size={40} className="quote-icon" />
          <blockquote className="quote-text">
            "Toda ética verdadera debe partir del reconocimiento del Otro excluido"
          </blockquote>
          <cite className="quote-author">— Enrique Dussel</cite>
          <p className="quote-explanation">
            <strong>Aplicación al proyecto:</strong> Nuestro sistema busca integrar a los productores ganaderos de menor escala (el "Otro excluido" tecnológico), ofreciendo una solución de alta precisión a bajo costo. La tecnología no debe ser un privilegio, sino una herramienta para la equidad y el desarrollo comunitario.
          </p>
        </div>

        <div className="card table-card mt-4">
          <h3>Matriz de Stakeholders</h3>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Actor / Grupo de Interés</th>
                  <th>Tipo</th>
                  <th>Interés Principal</th>
                  <th>Nivel de Impacto</th>
                </tr>
              </thead>
              <tbody>
                {stakeholders.map((sh, idx) => (
                  <tr key={idx}>
                    <td><strong>{sh.actor}</strong></td>
                    <td><span className="badge badge-outline">{sh.tipo}</span></td>
                    <td>{sh.interes}</td>
                    <td>{sh.impacto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactoSocial;
