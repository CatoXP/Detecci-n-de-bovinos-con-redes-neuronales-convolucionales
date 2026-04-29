import React, { useState } from 'react';
import { LogIn, AlertCircle } from 'lucide-react';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    // Simular pequeño delay para mejor UX
    setTimeout(() => {
      if (usuario === 'ganadero' && contrasena === '1234') {
        onLoginSuccess();
      } else {
        setError('Usuario o contraseña incorrectos');
      }
      setCargando(false);
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-blob blob-1"></div>
        <div className="login-blob blob-2"></div>
      </div>

      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon-wrapper">
              <LogIn size={40} />
            </div>
            <h1 className="login-title">Plataforma Ganadera</h1>
            <p className="login-subtitle">Monitoreo de Salud Bovino</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="usuario" className="form-label">
                Usuario
              </label>
              <input
                id="usuario"
                type="text"
                className="form-input"
                placeholder="Ingresa tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                disabled={cargando}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contrasena" className="form-label">
                Contraseña
              </label>
              <input
                id="contrasena"
                type="password"
                className="form-input"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                disabled={cargando}
              />
            </div>

            {error && (
              <div className="error-message">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn-login"
              disabled={cargando}
            >
              {cargando ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="login-footer">
            <p className="login-hint">
              Usuario: <strong>ganadero</strong> | Contraseña: <strong>1234</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
