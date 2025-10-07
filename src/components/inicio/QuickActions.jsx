import React from 'react';
import { useNavigate } from 'react-router-dom';
import folderIcon from '../../image/folder.png';
import listIcon from '../../image/list.png';
import checkmarkIcon from '../../image/Checkmark.png';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      id: 'ingreso',
      label: 'Nuevo Siniestro',
      icon: folderIcon,
      path: '/ingreso'
    },
    {
      id: 'consulta',
      label: 'Consultar Estado',
      icon: listIcon,
      path: '/consulta'
    },
    {
      id: 'reportes',
      label: 'Ver Reportes',
      icon: checkmarkIcon,
      path: '/reportes'
    }
  ];

  const handleActionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="quick-actions">
      <h3>Acciones Rápidas</h3>
      <div className="action-buttons">
        {actions.map(action => (
          <button
            key={action.id}
            className="action-btn"
            onClick={() => handleActionClick(action.path)}
          >
            <img src={action.icon} alt={action.label} className="action-icon" />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;