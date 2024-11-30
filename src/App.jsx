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
import Login from './pages/Login';
import Home from './pages/Home';
import Calendario from './pages/Calendario';
import Forum from './pages/Forum';
import Perfil from './pages/Perfil';
import Notificacoes from './pages/Notificacoes';
import Header from './components/Header'
import Modal from './components/Modal'

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
        <Route path="/header" element={<Header />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
};

export default App;




