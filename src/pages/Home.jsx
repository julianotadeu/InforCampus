import React from 'react';
import '../styles/pages/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();  // Hook para navegação

    const handleNavigation = (path) => {
        navigate(path);  // Função de navegação
    };

    return (
        <div className="home-container">
            {/* Botão de Sair que redireciona para a tela de login */}
            <button onClick={() => navigate('/')}>Sair</button>  

            <h1>Bem-vindo(a) à InforCampus</h1>
            <div className="menu">
                <button onClick={() => handleNavigation('/calendario')}>
                    <img src="/InforCampus/calendario.png" alt="Icone do Calendário" />
                    Calendário
                </button>
                <button onClick={() => handleNavigation('/forum')}>
                    <img src="/InforCampus/forum.png" alt="Icone do Fórum" />
                    Fórum
                </button>
                <button onClick={() => handleNavigation('/perfil')}>
                    <img src="/InforCampus/perfil.png" alt='Icone do Perfil' />
                    Perfil
                </button>
                <button onClick={() => handleNavigation('/notificacoes')}>
                    <img src="/InforCampus/notificacoes.png" alt="Icone das Notificações" />
                    Notificações
                </button>
            </div>
        </div>
    );
};

export default Home;
