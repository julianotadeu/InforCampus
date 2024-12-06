/*import React from "react";
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

export default Profile;*/

import React, { useState } from "react";
import "../styles/pages/Perfil.css";

const Profile = ({ userType }) => {
  // Dados de exemplo para o perfil
  const [userData, setUserData] = useState({
    name: "João Silva",
    birthDate: "1995-08-25",
    cpf: "123.456.789-00",
    email: "joao.silva@email.com",
    photoUrl: "https://via.placeholder.com/150",
  });

  // Função para editar o email
  const handleEmailChange = (e) => {
    setUserData({
      ...userData,
      email: e.target.value,
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{userType === "student" ? "Perfil do Aluno" : userType === "teacher" ? "Perfil do Professor" : "Perfil da Coordenação"}</h2>
      </div>
      <div className="profile-details">
        <div className="profile-photo">
          <img src={userData.photoUrl} alt="Profile" />
        </div>
        <div className="profile-info">
          <p><strong>Nome:</strong> {userData.name}</p>
          <p><strong>Data de Nascimento:</strong> {userData.birthDate}</p>
          {userType === "student" && <p><strong>CPF:</strong> {userData.cpf}</p>}
          <div className="profile-email">
            <strong>Email:</strong>
            <input 
              type="email" 
              value={userData.email} 
              onChange={handleEmailChange} 
              disabled={userType === "teacher" || userType === "coordination"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
