import React from "react";
import "../styles/pages/Forum.css"

function Forum() {
  return (
    <div className="container">
      <div className="page-content">
        <h1>Fórum</h1>
        <div className="forum-section">
          <h3>Últimas Discussões</h3>
          <ul>
            <li>
              <strong>Título:</strong> Dúvidas sobre o Trabalho Final
              <p><small>Por: João Silva - Há 2 dias</small></p>
            </li>
            <li>
              <strong>Título:</strong> Sugestões para o Calendário Acadêmico
              <p><small>Por: Maria Santos - Há 1 semana</small></p>
            </li>
            <li>
              <strong>Título:</strong> Recursos para Estudo de Física
              <p><small>Por: Lucas Almeida - Há 3 dias</small></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Forum;
