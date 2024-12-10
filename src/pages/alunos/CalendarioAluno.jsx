import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Estilo padrão do pacote
import '../../styles/pages/Calendario.css'; // Seu estilo customizado

const CalendarioAluno = () => {
    const [date, setDate] = useState(new Date());

    // Dados de exemplo para eventos
    const eventos = {
        "2024-12-10": { titulo: "Apresentação de TCC", descricao: "Entrega de projeto." },
        "2024-12-11": { titulo: "Aula de Manutenção de Sistemas", descricao: "Atividade pontuada." },
        "2024-12-18": { titulo: "Teste de Sistemas", descricao: "Entrega do projeto de programação." },
    };

    const handleChange = (selectedDate) => {
        setDate(selectedDate);
    };

    // Formatar a data para comparar com os eventos
    const dataFormatada = date.toISOString().split("T")[0];
    const eventoAtual = eventos[dataFormatada];

    return (
        <div className="calendar-container">
            <h1>Meu Calendário</h1>
            <Calendar onChange={handleChange} value={date} />
            <p>Data selecionada: <strong>{date.toLocaleDateString()}</strong></p>

            {eventoAtual ? (
                <div className="evento-info">
                    <h2>Evento: {eventoAtual.titulo}</h2>
                    <p>Descrição: {eventoAtual.descricao}</p>
                </div>
            ) : (
                <p>Não há eventos programados para esta data.</p>
            )}
            <button className="voltar" onClick={() => window.history.back()}>
                Voltar
            </button>
        </div>
    );
};

export default CalendarioAluno;
