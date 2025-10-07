import React from 'react';
import folderIcon from '../../image/folder1.png';
import checkmarkIcon from '../../image/Checkmark.png';
import listIcon from '../../image/list.png';
import yellowCheckmarkIcon from '../../image/YellowCheckMark.png';

const StatsGrid = ({ stats }) => {
  const statCards = [
    {
      id: 'activos',
      title: 'Siniestros Activos',
      value: stats.activos,
      subtitle: 'En proceso',
      icon: folderIcon
    },
    {
      id: 'completados',
      title: 'Completados',
      value: stats.completados,
      subtitle: 'Finalizados',
      icon: checkmarkIcon
    },
    {
      id: 'evaluacion',
      title: 'En Evaluación',
      value: stats.evaluacion,
      subtitle: 'En proceso',
      icon: listIcon
    },
    {
      id: 'total',
      title: 'Total Siniestros',
      value: stats.total,
      subtitle: 'Registrados',
      icon: yellowCheckmarkIcon
    }
  ];

  return (
    <div className="stats-grid">
      {statCards.map(stat => (
        <div key={stat.id} className="stat-card">
          <div className="stat-icon">
            <img src={stat.icon} alt={stat.title} className="stat-image" />
          </div>
          <div className="stat-content">
            <h3>{stat.title}</h3>
            <p className="stat-number">{stat.value}</p>
            <small>{stat.subtitle}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;