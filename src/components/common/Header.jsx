import React from 'react';
import logo from '../../image/logo.png';

const Header = ({ userType = 'admin' }) => {  // ← Valor por defecto como 'admin'
  const handleLogout = () => {
    console.log('Cerrando sesión...');
    // Aquí irá la lógica de logout
  };

  const getUserTypeDisplay = () => {
    switch (userType) {
      case 'admin':
        return 'Administrador';
      case 'cliente':
        return 'Cliente';
      default:
        return 'Administrador';  // ← Cambiado por defecto a Administrador
    }
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-logo">
          <img 
            src={logo}
            alt="Logo" 
            className="logo-image"
          />
          <h1>Sistema de Asistencia Vehicular</h1>
        </div>
        <div className="user-info">
          <span>Bienvenido, <strong>{getUserTypeDisplay()}</strong></span>
          <button onClick={handleLogout} className="btn-logout">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;