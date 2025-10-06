import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ activePage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { key: 'inicio', label: 'Inicio', path: '/' },
    { key: 'ingreso', label: 'Ingreso de Siniestro', path: '/ingreso' },
    { key: 'consulta', label: 'Consulta de Estado', path: '/consulta' },
    { key: 'reportes', label: 'Reportes', path: '/reportes' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (itemPath) => {
    if (itemPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <nav className="main-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.key}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path);
              }}
              className={isActive(item.path) ? 'active' : ''}
              href={item.path}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;