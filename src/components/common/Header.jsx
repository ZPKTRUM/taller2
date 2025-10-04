import React from 'react';
import logo from '../../image/logo.png'; // ← Importación directa

const Header = () => {
  const handleLogout = () => {
    console.log('Cerrando sesión...');
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-logo">
          <img 
            src={logo}  // ← Usa la variable importada
            alt="Logo" 
            className="logo-image"
          />
          <h1>Sistema de Asistencia Vehicular</h1>
        </div>
        <div className="user-info">
          <span>Bienvenido, <strong>Usuario</strong></span>
          <button onClick={handleLogout} className="btn-logout">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
