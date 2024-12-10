import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../styles/pages/Calendario.css'; // Seu estilo customizado

const CalendarioCoordenacao = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState({});
    const [newEvent, setNewEvent] = useState({ title: "", description: "" });
    const [editing, setEditing] = useState(false);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        setNewEvent({ title: "", description: "" });
        setEditing(false);
    };

    const handleCreateEvent = () => {
        const dateKey = date.toISOString().split("T")[0];
        setEvents({
            ...events,
            [dateKey]: { ...newEvent },
        });
        setNewEvent({ title: "", description: "" });
    };

    const handleDeleteEvent = () => {
        const dateKey = date.toISOString().split("T")[0];
        const updatedEvents = { ...events };
        delete updatedEvents[dateKey];
        setEvents(updatedEvents);
    };

    const handleEditEvent = () => {
        const dateKey = date.toISOString().split("T")[0];
        setEditing(true);
        setNewEvent(events[dateKey]);
    };

    const handleSaveEdit = () => {
        const dateKey = date.toISOString().split("T")[0];
        setEvents({
            ...events,
            [dateKey]: { ...newEvent },
        });
        setEditing(false);
    };

    return (
        <div className="calendar-container">
            <h1>Calendário da Coordenação</h1>
            <Calendar onChange={handleDateChange} value={date} />
            <p>Data selecionada: <strong>{date.toLocaleDateString()}</strong></p>

            {events[date.toISOString().split("T")[0]] ? (
                <div className="evento-info">
                    {editing ? (
                        <div>
                            <h2>Editar Evento</h2>
                            <input
                                type="text"
                                placeholder="Título"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                            <textarea
                                placeholder="Descrição"
                                value={newEvent.description}
                                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                rows="3"
                            />
                            <button onClick={handleSaveEdit}>Salvar Alterações</button>
                        </div>
                    ) : (
                        <div>
                            <h2>{events[date.toISOString().split("T")[0]].title}</h2>
                            <p>{events[date.toISOString().split("T")[0]].description}</p>
                            <button onClick={handleEditEvent}>Editar Evento</button>
                            <button onClick={handleDeleteEvent}>Excluir Evento</button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="evento-info">
                    <h2>Criar Evento</h2>
                    <input
                        type="text"
                        placeholder="Título"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        rows="3"
                    />
                    <button onClick={handleCreateEvent}>Salvar Evento</button>
                </div>
            )}
            <button className="voltar" onClick={() => window.history.back()}>
                Voltar
            </button>
        </div>
    );
};

export default CalendarioCoordenacao;
