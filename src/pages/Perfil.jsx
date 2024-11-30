import React from "react";
import Header from "../components/Header";
import "../styles/pages/Perfil.css";

function Profile() {
  return (
    <div>
      <Header active="profile" />
      <div className="profile-container">
        <h1>Perfil do Usuário</h1>
        <div className="profile-info">
          <div className="profile-picture">
            <img
              src="https://via.placeholder.com/150"
              alt="Foto do usuário"
              className="profile-img"
            />
          </div>
          <div className="profile-details">
            <h2>Nome do Usuário</h2>
            <p><strong>Email:</strong> usuario@exemplo.com</p>
            <p><strong>Data de Nascimento:</strong> 01/01/1990</p>
            <p><strong>Bio:</strong> Desenvolvedor de software apaixonado por tecnologia e aprendizado contínuo.</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="edit-button">Editar Perfil</button>
          <button className="logout-button" onClick={() => alert("Deseja sair da conta?")}>Sair</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
