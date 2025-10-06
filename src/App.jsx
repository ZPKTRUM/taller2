import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import IngresoSiniestro from './pages/IngresoSiniestro';
import ConsultaEstado from './pages/ConsultaEstado';
import Reportes from './pages/Reportes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ingreso" element={<IngresoSiniestro />} />
        <Route path="/consulta" element={<ConsultaEstado />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  );
}

export default App;