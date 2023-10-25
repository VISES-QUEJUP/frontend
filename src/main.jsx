import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registrar from './pages/Registrar';
import Ingresar from './pages/Ingresar';
import Publicacion from './components/Publicacion';
import Principal from './pages/Principal'
import Perfil from './pages/Perfil';
import Queja from './pages/Queja';
import { AuthProvider } from './context/authContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/queja" element={<Queja />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/publicacion" element={<Publicacion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<h1>Error, lugar no encontrado master :c</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
