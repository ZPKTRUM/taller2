import React from 'react'
import Header from '../components/common/Header.jsx'
import Navigation from '../components/common/Navigation.jsx'
import IngresoSiniestroForm from '../components/forms/IngresoSiniestroForm.jsx'


const IngresoSiniestro = () => {
  return (
    <div className="app">
      <Header />
      <Navigation activePage="ingreso" />
      <main className="main-content">
        <IngresoSiniestroForm />
      </main>
    </div>
  )
}

export default IngresoSiniestro