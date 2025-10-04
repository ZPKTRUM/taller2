import React from 'react';

const Navigation = ({ activePage }) => {
  const navItems = [
    { key: 'inicio', label: 'Inicio', href: '#' },
    { key: 'ingreso', label: 'Ingreso de Siniestro', href: '#' },
    { key: 'consulta', label: 'Consulta de Estado', href: '#' },
    { key: 'reportes', label: 'Reportes', href: '#' }
  ];

  return (
    <nav className="main-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              className={activePage === item.key ? 'active' : ''}
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