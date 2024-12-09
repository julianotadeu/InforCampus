import React, { useState } from 'react';


const NotificacoesCoordenacao = () => {


    return (
        <div className='container'>
            <div className="page-content">
                <h1>Notificações</h1>
                <ul>
                    <li>📢 Aula de Matemática foi reagendada para amanhã às 10h.</li>
                    <li>📢 Não haverá aula de Química na próxima segunda-feira.</li>
                    <li>📢 Fórum aberto: "Dúvidas sobre o Trabalho Final".</li>
                </ul>
                <br />
                <button className="voltar" onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    );
};

export default NotificacoesCoordenacao;