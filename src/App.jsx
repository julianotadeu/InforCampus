/*import './App.css'
import Login from './components/Login/Login'

function App() {

  return (
    <div className="App">
      <Login/>
    </div>
  )
}

export default App*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home';
import Calendario from './components/Calendario';
import Forum from './components/Forum';
import Perfil from './components/Perfil';
import Notificacoes from './components/Notificacoes';

const App = () => {
  return (
    <Router basename="/InforCampus">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
      </Routes>
    </Router>
  );
};

export default App;




