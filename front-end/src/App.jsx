import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Importaicon de paginas
import Home from '../src/pages/Home/Home.jsx';
import Landing from '../src/pages/Landing/Landing.jsx';
import Agenda from '../src/pages/Agenda/Agenda.jsx';
import Catalogo from '../src/pages/Catalogo/Catalogo.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/catalogo' element={<Catalogo />} /> 
      </Routes>
    </Router>
  )
}

export default App
