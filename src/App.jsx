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
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Calendario from './pages/Calendario.jsx';
import Forum from './pages/Forum.jsx';
import Perfil from './pages/Perfil.jsx';
import Notificacoes from './pages/Notificacoes.jsx';
import Header from './components/Header.jsx'
import Modal from './components/Modal.jsx'
import LoginAluno from './pages/alunos/LoginAluno.jsx';
import LoginProfessores from './pages/professores/LoginProfessores.jsx';
import LoginCoordenacao from './pages/coordenacao/LoginCoordenacao.jsx';
import HomeAluno from './pages/alunos/HomeAluno.jsx';
import HomeProfessores from './pages/professores/HomeProfessores.jsx';
import HomeCoordenacao from './pages/coordenacao/HomeCoordenacao.jsx';
import CalendarioAluno from './pages/alunos/CalendarioAluno.jsx';
import CalendarioProfessores from './pages/professores/CalendarioProfessores.jsx';
import CalendarioCoordenacao from './pages/coordenacao/CalendarioCoordenacao.jsx';
import ForumAluno from './pages/alunos/ForumAluno.jsx';
import ForumProfessores from './pages/professores/ForumProfessores.jsx';
import ForumCoordenacao from './pages/coordenacao/ForumCoordenacao.jsx';
import PerfilAluno from './pages/alunos/PerfilAluno.jsx';
import PerfilLoginProfessores from './pages/professores/PerfilProfessores.jsx';
import PerfilCoordenacao from './pages/coordenacao/PerfilCoordenacao.jsx';
import NotificacoesAluno from './pages/alunos/NotificacoesAluno.jsx';
import NotificacoesProfessores from './pages/professores/NotificacoesProfessores.jsx';
import NotificacoesCoordenacao from './pages/coordenacao/NotificacoesCoordenacao.jsx';


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
        <Route path="/loginAluno" element={<LoginAluno />} />
        <Route path="/loginProfessores" element={<LoginProfessores />} />
        <Route path="/loginCoordenacao" element={<LoginCoordenacao />} />
        <Route path="/homeAluno" element={<HomeAluno />} />
        <Route path="/homeProfessores" element={<HomeProfessores />} />
        <Route path="/homeCoordenacao" element={<HomeCoordenacao />} />
        <Route path="/calendarioAluno" element={<CalendarioAluno />} />
        <Route path="/calendarioProfessores" element={<CalendarioProfessores />} />
        <Route path="/calendarioCoordenacao" element={<CalendarioCoordenacao />} />
        <Route path="/forumAluno" element={<ForumAluno />} />
        <Route path="/forumProfessores" element={<ForumProfessores />} />
        <Route path="/forumCoordenacao" element={<ForumCoordenacao />} />
        <Route path="/perfilAluno" element={<PerfilAluno />} />
        <Route path="/perfilProfessores" element={<PerfilLoginProfessores />} />
        <Route path="/perfilCoordenacao" element={<PerfilCoordenacao />} />
        <Route path="/notificacoesAluno" element={<NotificacoesAluno />} />
        <Route path="/notificacoesProfessores" element={<NotificacoesProfessores />} />
        <Route path="/notificacoesCoordenacao" element={<NotificacoesCoordenacao />} />
      </Routes>
    </Router>
  );
};

export default App;




