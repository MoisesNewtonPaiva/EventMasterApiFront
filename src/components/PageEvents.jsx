import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PageEvents.css';

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

    const deleteEvent = async (eventId) => {
        try {
            await axios.delete(`https://eventmasterapi-v3zw.onrender.com/api/events/delete/${eventId}`);
            await fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Erro ao deletar evento. Tente novamente.');
        }
    };

    const updateEvent = async (eventId) => {
        const newName = prompt('Enter new name for the event:');
        if (!newName) return;
        try {
            await axios.put(`https://eventmasterapi-v3zw.onrender.com/api/events/update/${eventId}`, { name: newName });
            await fetchEvents();
        } catch (error) {
            console.error('Error updating event:', error);
            alert('Error updating event. Try again.');
        }
    };

    if (loading) return <div className="loading">Loading events...</div>;

    return (
        <div className="page-events-container">
            <h1 className="page-events-title">All Events</h1>
            <div className="events-grid">
                {events.length > 0 ? (
                    events.map((event) => (
                        <div key={event.id} className="event-card">
                            <h2 className="event-name">{event.name}</h2>
                            <p className="event-desc">{event.description}</p>
                            <div className="event-meta">
                                <span className="event-price">💰 R$ {event.price}</span>
                                <span className="event-date">📅 {new Date(event.data).toLocaleDateString()}</span>
                            </div>
                            <div className="event-actions">
                                <button className="update-btn" onClick={() => updateEvent(event.id)}>
                                    ✏️ Edit
                                </button>
                                <button className="delete-btn" onClick={() => deleteEvent(event.id)}>
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">
                        <p>No events found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}