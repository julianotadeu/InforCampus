import React, { useState } from 'react';


const NotificacoesAluno = () => {


    return (
        <div className='container'>
            <div className="page-content">
                <h1>Notificações</h1>
                <ul>
                    <li>📢 Aula de Modelagem de Sistemas foi reagendada para amanhã às 18:40.</li>
                    <li>📢 Aula de Banco de Dados do dia 17/12/2024 foi cancelada.</li>
                </ul>
                <br />
                <button className="voltar" onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    );
};

export default NotificacoesAluno;