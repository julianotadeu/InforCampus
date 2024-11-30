import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Header.css";
import Modal from "./Modal";

function Header({ active }) {
  // Estado para controlar a exibição do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();  // Hook para navegação

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
    navigate("/login");  // Redireciona para a página de login
  };

  return (
    <div className="header">
      <Link to="/calendario" className={`header-item ${active === "calendar" ? "active" : ""}`}>Calendário</Link>
      <Link to="/notificacoes" className={`header-item ${active === "notifications" ? "active" : ""}`}>Notificações</Link>
      <Link to="/perfil" className={`header-item ${active === "profile" ? "active" : ""}`}>Perfil</Link>
      <Link to="/forum" className={`header-item ${active === "forum" ? "active" : ""}`}>Fórum</Link>
      <button className="logout-button" onClick={handleLogoutClick}>Sair</button>

      {/* Modal de confirmação */}
      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={handleConfirmLogout} />
      )}
    </div>
  );
}

export default Header;
