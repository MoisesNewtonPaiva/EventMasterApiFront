import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PageId.css';

function PageId() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false); // Inicie como false

    useEffect(() => {
        
        if (id) {
            fetchEventById();
        }
    }, [id]);

    const fetchEventById = async () => {
        setLoading(true); // Começa a carregar aqui
        try {
            const response = await axios.get(`https://eventmasterapi-v3zw.onrender.com/api/events/${id}`);
            setEvent(response.data);
        } catch (error) {
            console.error('Error fetching event by ID:', error);
            setEvent(null); // Limpa o evento se der erro
        } finally {
            setLoading(false);
        }   
    };

    return (
        <div className="event-details">
            {/* Se não houver ID na URL ainda */}
            {!id && <p>Por favor, insira um ID para buscar.</p>}

            {loading && <p>Loading...</p>}

            {!loading && event && (
                <div>
                    <h2>{event.name}</h2>
                    <p>{event.data ? new Date(event.data).toLocaleDateString() : 'N/A'}</p>
                    <p className="price">Price: ${event.price}</p>
                    <p>{event.description}</p>
                </div>
            )}

            {!loading && id && !event && (
                <p>Event not found.</p>
            )}
        </div>
    );
}

export default PageId;
