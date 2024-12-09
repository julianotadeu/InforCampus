import React from "react";
import "../styles/pages/Notificacoes.css"

function Notificacoes() {
  return (
    <div>
      <div className="page-content">
        <h1>Notificações</h1>
        <ul>
          <li>📢 Aula de Matemática foi reagendada para amanhã às 10h.</li>
          <li>📢 Não haverá aula de Química na próxima segunda-feira.</li>
          <li>📢 Fórum aberto: "Dúvidas sobre o Trabalho Final".</li>
        </ul>
      </div>
    </div>
  );
}

export default Notificacoes;
