import React from 'react';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import IngresoSiniestroForm from '../components/ingreso/IngresoSiniestroForm';

const IngresoSiniestro = () => {
  return (
    <div className="app">
      <Header userType="admin" /> 
      <Navigation activePage="ingreso" />
      <main className="main-content">
        <IngresoSiniestroForm />
      </main>
    </div>
  );
};

export default IngresoSiniestro;