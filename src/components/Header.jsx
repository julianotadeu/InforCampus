import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";

function Header({ active }) {
  return (
    <div className="header">
      <Link to="/calendar" className={`header-item ${active === "calendar" ? "active" : ""}`}>Calendário</Link>
      <Link to="/notifications" className={`header-item ${active === "notifications" ? "active" : ""}`}>Notificações</Link>
      <Link to="/profile" className={`header-item ${active === "profile" ? "active" : ""}`}>Perfil</Link>
      <Link to="/forum" className={`header-item ${active === "forum" ? "active" : ""}`}>Fórum</Link>
      <button className="logout-button" onClick={() => alert("Deseja sair da conta?")}>Sair</button>
    </div>
  );
}

export default Header;
