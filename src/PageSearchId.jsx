import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PageSearchId.css';

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
        <div className="search-id">
            <h1>Search Event by ID</h1>
            <input
                type="number"
                placeholder="Enter Event ID"
                value={searchId} // Usa o estado correto
                onChange={(e) => setSearchId(e.target.value)} 
            />
            <button onClick={fetchEventById}>Search</button>
        </div>
    );
}

export default PageSearchId;
