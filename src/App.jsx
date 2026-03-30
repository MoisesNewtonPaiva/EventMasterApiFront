import { useEffect, useState } from 'react'
import axios from 'axios'


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
            <strong>{event.name}</strong>
          </li>
        ))}
      </ul>
      {events.length === 0 && <p>Carregando ou nenhum evento encontrado...</p>}
    </div>
  )
}

export default App;