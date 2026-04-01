import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PageSearchId.css';

function PageSearchId() {
    const {id} = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchEventById = async () => {
        try {
            useEffect (() => {
                fetchEventById();
            }, [id]);
            const response = await axios.get(`https://eventmasterapi-v3zw.onrender.com/api/events/${id}`);
            setEvent(response.data);
        } catch (error) {
            console.error('Error fetching event by ID:', error);
            alert('Erro ao buscar evento. Verifique o ID e tente novamente.');
        } finally {
            setLoading(false);
        }   
    };

    return (

        <><div className="search-id">
            <h1>Search Event by ID</h1>
            <input
                type="number"
                placeholder="Enter Event ID"
                value={id}
                onChange={(e) => setId(e.target.value)} />
            <button onClick={fetchEventById}>Search</button>
        </div>
        {loading ? (
            <div className="loading">Loading...</div>
        ) : event ? (
            <div className="event-details">
                <h2>{event.name}</h2>
                <p>{event.data ? new Date(event.data).toLocaleDateString() : 'N/A'}</p>
                <p className="price">Price: ${event.price}</p>
                <p>{event.description}</p>
            </div>
        ) : (
            <p>Event not found.</p>
        )}</>

    );
}

export default PageSearchId;