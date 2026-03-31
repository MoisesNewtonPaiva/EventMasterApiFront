import React, { useState, useEffect } from 'react';
import './PageEvents.css';

export default function PageEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            // Replace with your API endpoint
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Carregando...</div>;

    return (
        <div className="page-events">
            <h1>Eventos</h1>
            <div className="events-container">
                {events.length > 0 ? (
                    events.map((event) => (
                        <div key={event.id} className="event-card">
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p className="date">{new Date(event.data).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhum evento encontrado.</p>
                )}
            </div>
        </div>
    );
}