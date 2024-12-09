import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Estilo padrão do pacote
import '../../styles/pages/Calendario.css'; // Seu estilo customizado

const CalendarioAluno = () => {
    const [date, setDate] = useState(new Date());

    const handleChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <div className="calendar-container">
            <h1>Meu Calendário</h1>
            <Calendar onChange={handleChange} value={date} />
            <p>Data selecionada: <strong>{date.toLocaleDateString()}</strong></p>
        </div>
    );
};

export default CalendarioAluno;
