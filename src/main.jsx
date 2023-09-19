import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registrar from './pages/Registrar';
import Ingresar from './pages/Ingresar';
import Publicacion from './components/Publicacion';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/publicacion" element={<Publicacion />} />
        <Route path="*" element={<h1>Error, lugar no encontrado master :c</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
