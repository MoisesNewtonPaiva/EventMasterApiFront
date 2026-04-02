import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/PageSearchId.css';

function PageSearchId() {
    // 1. Estado para o que o usuário digita no input
    const [searchId, setSearchId] = useState('');
    const navigate = useNavigate();

    const fetchEventById = async (e) => {
        if (e) e.preventDefault();

        // Verifica se o campo não está vazio
        if (!searchId) return alert("Insert a valid ID.");
        
        try {
            // 2. Busca na API usando o ID digitado (searchId)
            const response = await axios.get(`https://eventmasterapi-v3zw.onrender.com/api/events/${searchId}`);

            if (response.data) {
                console.log("EEvent found! Navigating...");
                // 3. Navega para a página de detalhes usando o ID digitado
                navigate(`/events/${searchId}`);
            }
        } catch (error) {
            console.error('Error fetching event by ID:', error);
            alert('ID not found in the database.');
        }   
    };

    return (
        <div className="page-search-container">
            <div className="search-card">
                <div className="search-icon">🔍</div>
                <h2 className="search-title">Search Event By ID</h2>
                <p className="search-subtitle">Insert the ID of the event you want to search for.</p>
                <form onSubmit={fetchEventById} className="search-form">
                    <input
                        type="number"
                        placeholder="Ex: 123"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)} 
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </div>
    );
}

export default PageSearchId;
