import React, { useState } from 'react';
import Header from "../components/Header";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importando o estilo básico do calendário
import '../styles/pages/Calendario.css'; // Aqui vamos criar estilos customizados para melhorar o visual

function Calendario() {
  const [date, setDate] = useState(new Date());
  
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Header active="calendar" />
      <div className="calendar-container">
        <h1>Calendário</h1>
        <div className="calendar">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileContent={({ date, view }) => {
              // Adicionar eventos específicos ao calendário (exemplo: exibir uma bolinha em um dia)
              const isEventDay = date.getDate() === 15; // Exemplo de evento no dia 15
              return (
                isEventDay && view === 'month' ? (
                  <div className="event-day">🎉</div>
                ) : null
              );
            }}
          />
        </div>
        <div className="event-details">
          <h2>Detalhes do Evento</h2>
          <p>Evento do dia {date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Calendario;
