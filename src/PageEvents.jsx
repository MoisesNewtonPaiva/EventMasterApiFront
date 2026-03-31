import { useState, useEffect } from 'react';
import axios from 'axios';
import './PageEvents.css';

export default function PageEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://eventmasterapi-v3zw.onrender.com/api/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="page-events">
            <h1>Eventos</h1>
            <div className="events-container">
                {events.length > 0 ? (
                    events.map((event) => (
                        <div key={event.id} className="event-card">
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p className="price">Price: ${event.price}</p>
                            <p className="date">{new Date(event.data).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhum evento encontrado.</p>
                )}
            </div>
            <div className = "delete-container">
                <button onClick={fetchEvents} className="delete-button">x</button>
            </div>
        </div>
    );
}