import React, { useState } from 'react';
import '../styles/pages/Home.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'

const Home = () => {
    const navigate = useNavigate();  // Hook para navegação
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

    // Função para navegação entre páginas
    const handleNavigation = (path) => {
        navigate(path);
    };

    // Função que abre o modal
    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Função para confirmar o logout e redirecionar para a página de login
    const handleConfirmLogout = () => {
        setIsModalOpen(false);
        navigate("/");  // Redireciona para a página de login
    };

    return (
        <div className="home-container">
            <div>
                <button className="menu" onClick={handleLogoutClick}>Sair</button>
                {/* Modal de confirmação */}
                {isModalOpen && (
                    <Modal onClose={closeModal} onConfirm={handleConfirmLogout} />
                )}
            </div>

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
                    <img src="/InforCampus/perfil.png" alt="Icone do Perfil" />
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
