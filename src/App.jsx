import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import IngresoSiniestro from './pages/IngresoSiniestro';
import Reportes from './pages/Reportes';
// import ConsultaEstado from './pages/ConsultaEstado'; // Para después

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ingreso" element={<IngresoSiniestro />} />
        <Route path="/reportes" element={<Reportes />} />
        {/* <Route path="/consulta" element={<ConsultaEstado />} /> */}
      </Routes>
    </Router>
  );
}

export default App;