import React from 'react';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import ChartEstados from '../components/reportes/ChartEstados';
import ChartTipos from '../components/reportes/ChartTipos';
import ChartLiquidadores from '../components/reportes/ChartLiquidadores';
import ListaRecientes from '../components/reportes/ListaRecientes';

const Reportes = () => {
  return (
    <div className="app">
      <Header userType="admin" />
      <Navigation activePage="reportes" />
      <main className="main-content">
        <div className="dashboard">
          <ChartEstados />
          <ChartTipos />
          <ChartLiquidadores />
          <ListaRecientes />
        </div>
      </main>
    </div>
  );
};

export default Reportes;