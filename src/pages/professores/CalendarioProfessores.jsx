import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../styles/pages/Calendario.css'; // Seu estilo customizado

const CalendarioProfessores = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState({
        "2024-12-10": { title: "Reunião pedagógica", description: "Discussão sobre metas semestrais." },
        "2024-12-12": { title: "Aula extra", description: "Revisão para a prova final." },
    });
    const [editing, setEditing] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        setEditing(false);
        setNewDescription("");
    };

    const handleEdit = () => {
        setEditing(true);
        const event = events[date.toISOString().split("T")[0]];
        if (event) {
            setNewDescription(event.description);
        }
    };

    const handleSave = () => {
        const dateKey = date.toISOString().split("T")[0];
        setEvents({
            ...events,
            [dateKey]: {
                ...events[dateKey],
                description: newDescription,
            },
        });
        setEditing(false);
    };

    return (
        <div className="calendar-container">
            <h1>Calendário do Professor</h1>
            <Calendar onChange={handleDateChange} value={date} />
            <p>Data selecionada: <strong>{date.toLocaleDateString()}</strong></p>
            {events[date.toISOString().split("T")[0]] ? (
                <div className="evento-info">
                    <h2>{events[date.toISOString().split("T")[0]].title}</h2>
                    {editing ? (
                        <div>
                            <textarea
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                rows="3"
                            />
                            <button onClick={handleSave}>Salvar</button>
                        </div>
                    ) : (
                        <>
                            <p>{events[date.toISOString().split("T")[0]].description}</p>
                            <button onClick={handleEdit}>Editar Descrição</button>
                        </>
                    )}
                </div>
            ) : (
                <p>Nenhum evento para esta data.</p>
            )}
            <button className="voltar" onClick={() => window.history.back()}>
                Voltar
            </button>
        </div>
    );
};

export default CalendarioProfessores;
