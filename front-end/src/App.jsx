import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Importaicon de paginas
import Home from '../src/pages/Home/Home.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
    </Router>
  )
}

export default App
