import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import StatsGrid from '../components/inicio/StatsGrid';
import RecentActivity from '../components/inicio/RecentActivity';
import QuickActions from '../components/inicio/QuickActions';

const Inicio = () => {
  const [stats, setStats] = useState({
    activos: 0,
    completados: 0,
    evaluacion: 0,
    total: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);

  // Simular carga de datos
  useEffect(() => {
    // Datos mock - luego se conectarán con la API real
    setStats({
      activos: 12,
      completados: 45,
      evaluacion: 8,
      total: 65
    });

    setRecentActivity([
      {
        id: 1,
        type: 'new',
        message: 'Nuevo siniestro registrado #12345',
        time: 'Hace 5 minutos',
        cliente: 'Juan Pérez'
      },
      {
        id: 2,
        type: 'update',
        message: 'Siniestro #12344 actualizado a "En Evaluación"',
        time: 'Hace 15 minutos',
        cliente: 'María González'
      },
      {
        id: 3,
        type: 'complete',
        message: 'Siniestro #12340 finalizado',
        time: 'Hace 1 hora',
        cliente: 'Carlos López'
      }
    ]);
  }, []);

  return (
    <div className="app">
      <Header userType="admin" />
      <Navigation activePage="inicio" />
      <main className="main-content">
        <div className="welcome-section">
          <h2>Bienvenido al Panel de Administración</h2>
          <p>Desde este panel puedes gestionar todos los aspectos del sistema de asistencia vehicular.</p>
        </div>

        <StatsGrid stats={stats} />
        <QuickActions />
        <RecentActivity activities={recentActivity} />
      </main>
    </div>
  );
};

export default Inicio;