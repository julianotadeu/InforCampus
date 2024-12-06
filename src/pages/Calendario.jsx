/*
import React, { useState } from 'react';
import '../styles/pages/Calendario.css';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [events, setEvents] = useState([
    { date: '2019-09-19', title: 'Product team weekly meeting', time: '11:00 AM', color: 'lightblue' },
    { date: '2019-09-20', title: 'Call with Aaron', time: '9:30 AM', color: 'lightgreen' },
    { date: '2019-09-20', title: 'Meeting with Director of Operations', time: '11:00 AM', color: 'lightyellow' },
    { date: '2019-09-21', title: 'Piano lesson', time: '3:00 PM', color: 'lightpink' },
    { date: '2019-09-22', title: 'Take pup to the vet', time: '10:30 AM', color: 'lightcoral' },
    { date: '2019-09-23', title: 'Call with Aaron Schmidt', time: '2:30 PM', color: 'lightgray' },
    { date: '2019-09-24', title: 'Meeting with John', time: '9:00 AM', color: 'lightblue' },
  ]);

  const getEventsForDay = (day) => {
    return events.filter(event => event.date === day);
  };

  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path);
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 19; i <= 25; i++) {
      const date = `2019-09-${i < 10 ? '0' + i : i}`;
      const dayEvents = getEventsForDay(date);
      days.push(
        <div key={date} className="calendar-day">
          <div className="calendar-day-header">{i}</div>
          {dayEvents.map((event, idx) => (
            <div key={idx} className="event" style={{ backgroundColor: event.color }}>
              <span className="event-time">{event.time}</span>
              <span className="event-title">{event.title}</span>
            </div>
          ))}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button type="button" onClick={() => handleNavigation('/home')}>Voltar</button>
        <span>September 2019</span>
        <div className="navigation">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className="calendar-week">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
*/

import React, { useContext, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // para eventos clicáveis
import { EventContext } from '../context/EventContext';
import { UserContext } from '../context/UserContext';

const Calendar = () => {
    const { events, addEvent, updateEvent, deleteEvent } = useContext(EventContext);
    const { userType } = useContext(UserContext);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleDateClick = (info) => {
        if (userType !== 'Aluno') {
            const title = prompt('Digite o título do evento:');
            if (title) addEvent({ title, date: info.dateStr });
        }
    };

    const handleEventClick = (info) => {
        if (userType === 'Coordenação' || userType === 'Professor') {
            const action = prompt('Digite "editar" para alterar ou "remover" para excluir:');
            if (action === 'editar') {
                const newTitle = prompt('Novo título:');
                if (newTitle) updateEvent(info.event.id, { title: newTitle });
            } else if (action === 'remover') {
                deleteEvent(info.event.id);
            }
        }
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
        />
    );
};

export default Calendar;
