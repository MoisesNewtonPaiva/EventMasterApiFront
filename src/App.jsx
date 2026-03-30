import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import PageEvents from './PageEvents';
import PageInsert from './PageInsert' ;



function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    searchJavaData();
  }, []);

  const searchJavaData = async () => {
    try {
      const resposta = await axios.get("https://eventmasterapi-v3zw.onrender.com/api/events");
      setEvents(resposta.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={() => setEvents([])}>
        Clear Events
      </button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>Name: </strong>{event.name} <br />
            <strong>Date: </strong>{event.data} <br />
            <strong>Price: </strong> {event.price} <br />
            <strong>Description: </strong>{event.description} <br />
          </li>
        ))}
      </ul>
      {events.length === 0 && <p>Carregando ou nenhum evento encontrado...</p>}
    </div>
  )
}

export default App;