
import { useState } from 'react';
import axios from 'axios';
import '../css/PageInsert.css';

function PageInsert() {

    const [name, setName] = useState('');
    const [data, setData] =useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEvent = {
            name: name,
            data: data,
            price: price,
            description: description
        };

        try {
            await axios.post('https://eventmasterapi-v3zw.onrender.com/api/events', newEvent);
            alert('Event inserted successfully!');
            setName('');
            setData('');
            setPrice('');
            setDescription('');
        } catch (error) {
            console.error('Error inserting event:', error);
            alert('Error inserting event. Please try again.');

        }
    };
    return (
        <div className="page-insert-container">
            <div className="insert-card">
                <h2 className="insert-title">Add New Event</h2>
                <form onSubmit={handleSubmit} className="insert-form">
                    <div className="input-group">
                        <label>Event Name</label>
                        <input type="text" placeholder="Ex: Tech Conference 2024" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Date</label>
                            <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
                        </div>
                        <div className="input-group">
                            <label>Price (R$)</label>
                            <input type="number" placeholder="Ex: 99.90" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Descrição</label>
                        <textarea placeholder="Talk about the event..." value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="insert-button">Register Event</button>
                </form>
            </div>
        </div>
    );
}

export default PageInsert;