import React from "react";
import "../../styles/pages/Perfil.css";

const PerfilCoordenacao = () => {
  // Dados estáticos para o perfil
  const userData = {
    name: "João Silva",
    birthDate: "1995-08-25",
    cpf: "123.456.789-00",
    email: "joao.silva@email.com",
    photoUrl: "https://via.placeholder.com/150",
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Perfil do Aluno</h2>
      </div>
      <div className="profile-details">
        <div className="profile-photo">
          <img src={userData.photoUrl} alt="Foto do perfil" />
        </div>
        <div className="profile-info">
          <p>
            <strong>Nome:</strong> {userData.name}
          </p>
          <p>
            <strong>CPF:</strong> {userData.cpf}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <br />
          <button className="voltar" onClick={() => window.history.back()}>
          Voltar
        </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilCoordenacao;
