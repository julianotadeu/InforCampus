import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([
        { id: '1', title: 'Aula de Matemática', date: '2024-12-07' },
        { id: '2', title: 'Aula de Física', date: '2024-12-08' }
    ]);

    const addEvent = (event) => {
        setEvents([...events, { id: String(events.length + 1), ...event }]);
    };

    const updateEvent = (id, updatedEvent) => {
        setEvents(events.map(event => event.id === id ? { ...event, ...updatedEvent } : event));
    };

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
            {children}
        </EventContext.Provider>
    );
};
